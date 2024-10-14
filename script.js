let myLibrary = [];

let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let isReadCheckBox = document.querySelector('#is-read');

document.querySelector('.add-book-button').addEventListener("click", addBookToLibrary);

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){
    //retrieve book info from user
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = isReadCheckBox.value;

    //Create book object
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook)

    //update display
    displayBook(newBook);
}

function displayBook(newBook){
    let libraryDisplay = document.querySelector('#library');
    
    let newBookCard = document.createElement('div');
    newBookCard.className = 'book-card';
    libraryDisplay.appendChild(newBookCard);

    //Title header
    let titleHeader = document.createElement('h2');
    titleHeader.className = 'book-title';
    titleHeader.textContent = newBook.title;
    newBookCard.appendChild(titleHeader);

    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.setAttribute('type', 'button')
    deleteButton.textContent = 'X';
    newBookCard.appendChild(deleteButton);

    //info list
    let bookInfoList = document.createElement('ul');
    bookInfoList.className = 'book-info';
    newBookCard.appendChild(bookInfoList);
    //----Author list item
    let authorListItem = document.createElement('li');
    authorListItem.className = 'book-author';
    authorListItem.textContent = newBook.author;
    bookInfoList.appendChild(authorListItem);
    //--------Author label
    let authorLabelSpan = document.createElement('span');
    authorLabelSpan.className = 'label';
    authorLabelSpan.textContent = 'Author:'
    authorListItem.insertBefore(authorLabelSpan, authorListItem.childNodes[0]);

    //----Pages list item
    let pagesListItem = document.createElement('li');
    pagesListItem.className = 'book-pages';
    pagesListItem.textContent = newBook.pages;
    bookInfoList.appendChild(pagesListItem);
    //--------Pages label
    let pagesLabelSpan = document.createElement('span');
    pagesLabelSpan.className = 'label';
    pagesLabelSpan.textContent = 'Pages:';
    pagesListItem.insertBefore(pagesLabelSpan, pagesListItem.childNodes[0]);

    //----bookIsRead list item
    let isReadListItem = document.createElement('li');
    isReadListItem.className = 'book-is-read';
    isReadListItem.textContent = newBook.isRead ? 'Completed' : "Unread";
    bookInfoList.appendChild(isReadListItem);


    //edit button
    let editButton = document.createElement('button');
    editButton.className = "edit-button";
    editButton.setAttribute('type', 'button')
    editButton.textContent = 'E';
    newBookCard.appendChild(editButton);

}