function Books(title, author, pages, read) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
    this.info = function() {
       return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet.`;
    };
}

const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, "not read");

theHobbit.info();