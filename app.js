let myLibrary = [];

let info = {};

//Creates a book item
function Book(title, author, pages, readStatus) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//loops through an array and dusplays each book
function addBookToLibrary() {


}

const myButton = document.querySelector("#submit");

//When the user clicks the submit button, the data from the form is used to create a new book. Which is pushed into the myLibrary array.

myButton.onclick = () => {

    let bookTitle = document.getElementById("book-title").value;
    let bookAuthor = document.getElementById("book-author").value;
    let bookPages = document.getElementById("pages").value;

}


