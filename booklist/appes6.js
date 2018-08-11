class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addItem(book) {
        const tbody = document.querySelector('#book-list');
        const row = document.createElement('tr');
    
        const column_title = document.createElement('td');
        const title = document.createTextNode(book.title);
        column_title.appendChild(title)
        row.appendChild(column_title);
    
        const column_author = document.createElement('td');
        const author = document.createTextNode(book.author);
        column_author.appendChild(author);
        row.appendChild(column_author);
    
        const column_isbn = document.createElement('td');
        const isbn = document.createTextNode(book.isbn);
        column_isbn.appendChild(isbn)
        row.appendChild(column_isbn);
    
        const column_delete = document.createElement('td');
        const delete_link = document.createElement('a');
        delete_link.setAttribute('href','#');
        delete_link.addEventListener('click', function(e) {
            const ui = new UI();
            ui.deleteBook(this);
            ui.showAlert('Deleted Successfully', 'success');
            e.preventDefault();
        });
        const delete_text = document.createTextNode('x');
        delete_link.appendChild(delete_text);
        column_delete.appendChild(delete_link);
        row.appendChild(column_delete);
    
        tbody.appendChild(row);
    }

    deleteBook(target) {
        target.parentElement.parentElement.remove();
    }

    showAlert(message, errClass) {
        const div = document.createElement('div');
        div.className = `alert ${errClass}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    resetFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';        
    }
}

// Add Event Listener
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill the form', 'error');
    } else {
        ui.addItem(book);
        ui.resetFields()
        ui.showAlert('Added Successfully', 'success');
    }
    e.preventDefault();
});