function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
};

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        //...
    }
};

addBookToLibrary("The Phoenix Project", "Gene Kim", 345, "read");
addBookToLibrary("The Abolition of Man", "C. S. Lewis", 48, "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");