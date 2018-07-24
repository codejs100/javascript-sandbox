// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {

}

UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('#book-list');
    const row = this.createElementTag('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">x</a></td>
    `;
    list.appendChild(row);
    /*
    for(let key in book) {
        if(book.hasOwnProperty(key)) {
            let column = this.createElementTag('td');
            let content = this.createTagText(book[key]);
            this.appendElementToParent(column, content);
            this.appendElementToParent(row,column);
        }
    }
    this.appendElementToParent(list,row);
    */
};

UI.prototype.clearFields = function() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

UI.prototype.createElementTag = function(tag) {
    return document.createElement(tag);
};

UI.prototype.createTagText = function(text) {
    return document.createTextNode(text);
};

UI.prototype.appendElementToParent = function(parent, child) { 
    parent.appendChild(child);
};

// Added Event Listioner
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;

    const book = new Book(title,author,isbn);
    const ui = new UI();
    
    ui.addBookToList(book);
    ui.clearFields();

    e.preventDefault();
});