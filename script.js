function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet
}

//array for storing all books
const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}