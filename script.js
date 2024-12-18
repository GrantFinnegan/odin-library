let myLibrary = [];

//set up form for adding new books
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let isReadCheckBox = document.querySelector('#is-read');

document.querySelector('.add-book-button').addEventListener("click", addBookToLibrary);

function Book(title, author, pages, isRead, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}

Book.prototype.genBookCard = function() {
    //initiate card <div>
    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.setAttribute("data", '' + this.id)


    //Title header
    let titleHeader = document.createElement('h2');
    titleHeader.className = 'book-title';
    titleHeader.textContent = this.title;

    bookCard.appendChild(titleHeader);


    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.setAttribute('type', 'button')
    deleteButton.textContent = 'X';

    // deleteButton.addEventListener(); needs re-implementation

    bookCard.appendChild(deleteButton);


    //info list
    let bookInfoList = document.createElement('ul');
    bookInfoList.className = 'book-info';
    bookCard.appendChild(bookInfoList);

    let authorListItem = createLabeledListItem(this.author, 'Author: ', 'book-author');
    bookInfoList.appendChild(authorListItem);

    let pagesListItem = createLabeledListItem(this.pages, 'Pages: ', 'book-pages');
    bookInfoList.appendChild(pagesListItem);

    let isReadListItem = createIsReadListItem(this.isRead, bookCard);
    bookInfoList.appendChild(isReadListItem);

    //edit button
    let editButton = document.createElement('button');
    editButton.className = "edit-button";
    editButton.setAttribute('type', 'button')
    editButton.textContent = 'E';
    bookCard.appendChild(editButton);

    return bookCard;
};



//load baseline library
//      this would be done with a database, in an actualy project
//      that's a later lesson, so it's just static 
autoPopulateLibrary();




function addBookToLibrary(){
    //retrieve book info from user
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = isReadCheckBox.checked;

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

function toggleIsRead(bookCardNode) {
    myLibrary[bookCardNode.getAttribute('data')].isRead = ! (myLibrary[bookCardNode.getAttribute('data')].isRead);
}

//card creation functions

function createLabeledListItem (textContent, labelText, className){
    let labeledListItem = document.createElement('li');
    labeledListItem.className = className;
    labeledListItem.textContent = textContent;

    let labelSpan = document.createElement('span');
    labelSpan.className = 'label';
    labelSpan.textContent = labelText;

    //Insert label span before text node of labeledListItem
    labeledListItem.insertBefore(labelSpan, labeledListItem.childNodes[0]);

    return labeledListItem;
}

function createIsReadListItem (isRead, bookCard){
    let listItem = document.createElement('li');

    listItem.className = 'book-is-read';
    listItem.textContent = 'Completed:'

    //Checkbox creation
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'is-read-checkbox';
    checkbox.checked = isRead;

    checkbox.addEventListener('click', () => toggleIsRead(bookCard));

    listItem.appendChild(checkbox);

    return listItem;
}

function displayBook(book){
    let libraryDisplay = document.querySelector('#library');
    libraryDisplay.appendChild(book.genBookCard());
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