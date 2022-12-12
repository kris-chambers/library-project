let myLibrary = [];

function Book(bookTitle, bookAuthor, numberOfPages, readStatus) {
  this.bookTitle = bookTitle
  this.bookAuthor = bookAuthor
  this.numberOfPages = numberOfPages
  this.readStatus = readStatus
}

function addBookToLibrary() {
  let newBook = "user's inputed information"
  myLibrary.push(newBook);
}

function displayLibrary() {
  for (const book of myLibrary) {
    const library = document.querySelector('.library');
    const div = document.createElement('div');
    library.append(div);
  }
}