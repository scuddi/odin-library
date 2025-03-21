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
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);

    // Expand form

    
};

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        content = document.getElementById("content");

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        
        titleDiv = document.createElement("div");
        titleDiv.classList.add("book-title");
        titleDiv.innerHTML = `"${myLibrary[i].title}"`;

        authorDiv = document.createElement("div");
        authorDiv.classList.add("book-author");
        authorDiv.innerHTML = `Author: ${myLibrary[i].author}`;
        
        pagesDiv = document.createElement("div");
        pagesDiv.classList.add("book-pages");
        pagesDiv.innerHTML = `Pages: ${myLibrary[i].pages}`;
        
        readDiv = document.createElement("div");
        readDiv.classList.add("book-read");
        readDiv.innerHTML = `Status: ${myLibrary[i].read}`;


        content.appendChild(bookCard);
        bookCard.append(titleDiv, authorDiv, pagesDiv, readDiv)
    };
};

addBookToLibrary("The Phoenix Project", "Gene Kim", 345, "read");
addBookToLibrary("The Abolition of Man", "C. S. Lewis", 48, "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");

displayBooks(myLibrary);