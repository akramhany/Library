const myLibrary = [];

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function displayNewBook(book) {
    const booksGrid = document.querySelector('.books-grid');
    
    const newBook = document.createElement('div');
    newBook.className = "book";

    for (const key in book) {
        const newCell = document.createElement('p');
        newCell.textContent = book[key];
        newBook.appendChild(newCell);
    }
    
    //add a button to allow the user to remove a book from the library if he want
    const newButton = document.createElement('button');
    newButton.className = "deleteBook";
    newButton.textContent = "Remove";
    newBook.appendChild(newButton);

    booksGrid.appendChild(newBook);
}

function addBookToLibrary(author, title, numberOfPages) {
    const newBook = new Book(author, title, numberOfPages);
    myLibrary.push(newBook);
    displayNewBook(newBook);
}

const addNewBookButton = document.querySelector('.addNewBook');
const closeButton = document.querySelector('.closeButton');
const modalAddButton = document.querySelector('.modalAddButton')
const modalBox = document.querySelector('#modal');


addNewBookButton.addEventListener('click', () => {
    modalBox.showModal();
})

closeButton.addEventListener('click', () => {
    modalBox.close();
})

modalAddButton.addEventListener('click', () => {
    modalBox.close();
})

const formSubmit = document.querySelector('.modal-form');

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    const author = event.currentTarget.author.value;
    const title = event.currentTarget.title.value;
    const numberOfPages = event.currentTarget.numOfPages.value;
    addBookToLibrary(author, title, numberOfPages);
    event.currentTarget.author.value = "";
    event.currentTarget.title.value = "";
    event.currentTarget.numOfPages.value = "";
})

