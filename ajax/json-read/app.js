function getCustomer(e) {
    let response = ajaxCall('GET', 'customer.json', 'customer');
    e.preventDefault();
}

function getCustomers(e) {
    let output = '';
    let response = ajaxCall('GET', 'customers.json', 'customers');
    e.preventDefault();
}

function ajaxCall(method, url, id) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onload = function() {
        if(this.status == 200) {
            let response = JSON.parse(this.responseText);
            setDisplay(response, id);
        }
    }
    xhr.send();
}

function setDisplay(response, id) {
    let output = '';
    if(Array.isArray(response)) {
        response.forEach(res => output += getHTML(res));
    } else {
        output = getHTML(response);
    }
    document.querySelector('#'+ id).innerHTML = output;
}

function getHTML(response) {
    return `<ul>
    <li>Name: ${response.name}</li>
    <li>Address: ${response.address}</li>
    <li>Phone: ${response.phone}</li>
    <li>Email: ${response.email}</li>
    </ul>`;
}

// Add Event listeners
document.querySelector('#button1').addEventListener('click', getCustomer);
document.querySelector('#button2').addEventListener('click', getCustomers);