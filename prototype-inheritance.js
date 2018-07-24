// Create Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greetings = function() {
    console.log(`Hi ${this.firstName} ${this.lastName}, how are you?`);
}

// Create person object
const person1 = new Person('First Name', 'Last Namr');
console.log(person1);
person1.greetings();

// Create Customer Constructor that inherit Person
function Customer(firstName, lastName, phone, email) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.email = email;
}
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Customer Fname', 'Customer Lname', '555-555-5555', 'customer@mail.com');
console.log(customer1);
customer1.greetings();