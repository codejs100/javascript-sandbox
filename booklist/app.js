// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI constructor
function UI() {

}
UI.prototype.addItem = function(book) {
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
    delete_link.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });
    const delete_text = document.createTextNode('x');
    delete_link.appendChild(delete_text);
    column_delete.appendChild(delete_link);
    row.appendChild(column_delete);

    tbody.appendChild(row);
}

UI.prototype.resetFields = function() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

// Add Event Listener
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    ui.addItem(book);
    ui.resetFields()
    e.preventDefault();
})