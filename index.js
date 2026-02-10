function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  const readStatus = this.isRead ? "has been read" : "has not been read";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}.`;
};

const myLibrary = [];

const form = document.getElementById("bookForm");
const libraryDiv = document.getElementById("library");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from refreshing

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const isRead = document.getElementById("isRead").checked;

  // Create a new Book
  const newBook = new Book(title, author, pages, isRead);

  // Add it to the library
  myLibrary.push(newBook);

  // Display the book
  displayLibrary();
  updateBookCount();

  // Reset form
  form.reset();
});

function displayLibrary() {
  libraryDiv.innerHTML = ""; // clear previous display
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.textContent = book.info();
    libraryDiv.appendChild(bookDiv);
  });
}

// check how many books have been added to the array
function updateBookCount() {
  const header = document.querySelector(".header");

  // Remove the old count paragraph if it exists
  const oldP = header.querySelector(".content");
  if (oldP) oldP.remove();

  // Create a new paragraph
  const p = document.createElement("p");
  p.textContent =
    myLibrary.length === 0
      ? "You have not added any books"
      : `You have added ${myLibrary.length} book/s`;
  p.classList.add("content");
  header.appendChild(p);
}

