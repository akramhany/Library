const myLibrary = [];

function Book(author, title, numberOfPages, readOrNot) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readOrNot = readOrNot;
}

function addBookToLibrary(author, title, numberOfPages, readOrNot) {
    const newBook = new Book(author, title, numberOfPages, readOrNot);
    myLibrary.push(newBook);
}

const addNewBookButton = document.querySelector('.addNewBook');
const closeButton = document.querySelector('.closeButton')
const modalBox = document.querySelector('#modal');


addNewBookButton.addEventListener('click', () => {
    modalBox.showModal();
})

closeButton.addEventListener('click', () => {
    modalBox.close();
})

