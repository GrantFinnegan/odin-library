const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){
    //retrieve book info from user

    //construct book object

    //display book card on page
}

function displayBook(){
    let libraryDisplay = document.querySelector('#library');
    
    let newBookCard = document.createElement('div');
    newBookCard.className = 'book-card';
    libraryDisplay.appendChild(newBookCard);

    //Title header
    let titleHeader = document.createElement('h2');
    titleHeader.className = 'book-title';
    titleHeader.textContent = "Lord of the Rings"; //placeholder
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
    authorListItem.textContent = ' TEST AUTHOR'; //placeholder
    bookInfoList.appendChild(authorListItem);
    //--------Author label
    let authorLabelSpan = document.createElement('span');
    authorLabelSpan.className = 'label';
    authorLabelSpan.textContent = 'Author:'
    //insert label before text node of list item
    //childNodes property is used over children property because it includes the text node
    authorListItem.insertBefore(authorLabelSpan, authorListItem.childNodes[0]);

    //----Pages list item
    let pagesListItem = document.createElement('li');
    pagesListItem.className = 'book-pages';
    pagesListItem.textContent = ' 999'; //placeholder
    bookInfoList.appendChild(pagesListItem);
    //--------Pages label
    let pagesLabelSpan = document.createElement('span');
    pagesLabelSpan.className = 'label';
    pagesLabelSpan.textContent = 'Pages:';
    //insert label before text node
    //childNodes property is used over children property because childNodes includes text nodes
    pagesListItem.insertBefore(pagesLabelSpan, pagesListItem.childNodes[0]);

    //----bookIsRead list item
    let isReadListItem = document.createElement('li');
    isReadListItem.className = 'book-is-read';
    isReadListItem.textContent = 'Completed'; //placeholder
    bookInfoList.appendChild(isReadListItem);


    //edit button
    let editButton = document.createElement('button');
    editButton.className = "edit-button";
    editButton.setAttribute('type', 'button')
    editButton.textContent = 'E';
    newBookCard.appendChild(editButton);

}