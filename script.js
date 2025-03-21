function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
};

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        // Here comes all the text for the display.
    }
}