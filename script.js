let myLibrary = [
  {
    "bookTitle": "The Hobbit",
    "bookAuthor": "J.R.R. Tolkien",
    "numberOfPages": "295",
    "readStatus": "read",
  },

  {
    "bookTitle": "Harry Potter",
    "bookAuthor": "J.K. Rowling",
    "numberOfPages": "4000",
    "readStatus": "read",
  }
];

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
    div.classList.add('card');
    library.append(div);
    const title = book.bookTitle
    const author = book.bookAuthor
    const pages = book.numberOfPages
    const read = book.readStatus
    const text = document.createTextNode(`${title} by ${author}${newLineChar}`)
    const text2 = document.createTextNode(`${pages} pages. I have ${read} this book.`)
    div.append(text);
    // queryForm.appendchild(linebreak);
    div.append(text2);
  }
}