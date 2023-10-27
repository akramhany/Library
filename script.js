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

