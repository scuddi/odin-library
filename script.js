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

// Saving list for added books

const myLibrary = [];

// Expand form to add books

function expandForm() {
    document.getElementById("form").className = "form-expanded";
};

// Add a book with the form

submitForm.addEventListener("submit", (e) =>{

    e.preventDefault();

    let title = document.getElementById("form-title").value;
    let author = document.getElementById("form-author").value;
    let pages = document.getElementById("form-pages").value;
    let read = document.getElementById("form-status").checked;

    // Add book to existing library

    const newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);

    displayBooks();
    
    document.getElementById("form").className ="form-hidden";
    document.getElementById("form").reset();
});

// Predefined books

function addBookToLibrary(title, author, pages, read) {

    const newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);

    document.getElementById("form").className ="form-hidden";
};

// Display books

function displayBooks() {
    content = document.getElementById("content");

    // Outcommented for testing and developing
    content.innerHTML = "";

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
        let readDivText= document.createElement("div");
        readDivText.classList.add("book-read-text");
        readDivText.innerHTML = "Read: ";
        let readDivInput = document.createElement("input");
        readDivInput.classList.add("tgl");
        readDivInput.setAttribute("type", "checkbox");
        readDivInput.id = myLibrary[i].id;
        readDivInput.checked = myLibrary[i].read;

        let readDivLabel = document.createElement("label");
        readDivLabel.classList.add("tgl-btn");
        readDivLabel.setAttribute("for", myLibrary[i].id);

        readDivInput.addEventListener("change", function() {
            myLibrary[i].read = this.checked;
        });

        readDiv.append(readDivText, readDivInput, readDivLabel);

        let removeButton = document.createElement("button");
        removeButton.classList.add("remove-book");
        removeButton.innerHTML = "X";

        removeButton.addEventListener("click", function() {
            myLibrary.splice(i, 1);
            displayBooks();
        });

        content.appendChild(bookCard);
        bookCard.append(titleDiv, authorDiv, pagesDiv, readDiv, removeButton);
    };
};

// Predefined books

addBookToLibrary("The Phoenix Project", "Gene Kim", 345, true);
addBookToLibrary("The Abolition of Man", "C. S. Lewis", 48, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

displayBooks(myLibrary);

// Event listeners

buttonExpandForm.addEventListener("click", expandForm);