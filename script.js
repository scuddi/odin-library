// Queryselector for Document Elements

const submitForm = document.querySelector("form");
const buttonExpandForm = document.querySelector("#expand-form");
const buttonSubmitForm = document.querySelector("#submit");

// Library Functionalities

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
};

const myLibrary = [];

function expandForm() {
    document.getElementById("form").className = "form-expanded";
};

submitForm.addEventListener("submit", (e) =>{

    e.preventDefault();

    let title = document.getElementById("form-title").value;
    let author = document.getElementById("form-author").value;
    let pages = document.getElementById("form-pages").value;
    let read = document.getElementById("form-status").checked;

    // Function to transform booleans of read status to strings

    if (read === true) {
        read = "read";
    } else {
        read = "not read";
    };

    // Add book to existing library

    const newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);

    displayBooks();
    
    document.getElementById("form").className ="form-hidden";
    document.getElementById("form").reset();
});

function addBookToLibrary(title, author, pages, read) {

    const newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);

    document.getElementById("form").className ="form-hidden";
};

function displayBooks() {
    content = document.getElementById("content");

    // Outcommented for testing 
    // content.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("book-title");
        titleDiv.innerHTML = `"${myLibrary[i].title}"`;

        let authorDiv = document.createElement("div");
        authorDiv.classList.add("book-author");
        authorDiv.innerHTML = `Author: ${myLibrary[i].author}`;
        
        let pagesDiv = document.createElement("div");
        pagesDiv.classList.add("book-pages");
        pagesDiv.innerHTML = `Pages: ${myLibrary[i].pages}`;
        
        let readDiv = document.createElement("div");
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

buttonExpandForm.addEventListener("click", expandForm);