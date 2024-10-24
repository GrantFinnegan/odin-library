let myLibrary = [];

let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let isReadCheckBox = document.querySelector('#is-read');

document.querySelector('.add-book-button').addEventListener("click", addBookToLibrary);

autoPopulateLibrary();

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

function deleteBook(bookCardNode, title) {
    myLibrary = myLibrary.filter((value, index) => index != bookCardNode.getAttribute('data'));
    bookCardNode.remove();
}

function displayBook(newBook){
    let libraryDisplay = document.querySelector('#library');
    
    let newBookCard = document.createElement('div');
    newBookCard.className = 'book-card';
    newBookCard.setAttribute("data", '' + myLibrary.length)
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
    //delete button functionality
    deleteButton.addEventListener("click", () => deleteBook(newBookCard, newBook.title));

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
    let isReadCheckBox = document.createElement('input');
    isReadCheckBox.setAttribute('type', 'checkbox');
    isReadCheckBox.className = 'is-read-checkbox';
    isReadCheckBox.checked = newBook.isRead;
    isReadListItem.insertBefore(isReadCheckBox, isReadListItem.childNodes[0]);
    bookInfoList.appendChild(isReadListItem);


    //edit button
    let editButton = document.createElement('button');
    editButton.className = "edit-button";
    editButton.setAttribute('type', 'button')
    editButton.textContent = 'E';
    newBookCard.appendChild(editButton);

}


function autoPopulateLibrary() {
    let baseLibrary = [];
    baseLibrary.push(new Book('The Lord of the Rings', 'Jolkien Rolkien Rolkien Tolkien', 120, true));
    baseLibrary.push(new Book('The Hobbit', 'JRR Tolkien', 340, false));
    baseLibrary.push(new Book('This is how you lose the time war', 'Amal El-Mohtar and Max Gladstone', 238, false));
    baseLibrary.push(new Book('The Grapes of Wrath', 'John Steinbeck', 1043, true));
    baseLibrary.push(new Book('Bible, the', 'Paul et al.', 413, true));

    for (let book of baseLibrary){
        myLibrary.push(book);
        displayBook(book);
    }
}