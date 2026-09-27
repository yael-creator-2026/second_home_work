const Book = require('./Book');

let books = [];

function addBook(title, category) {
  const newBook = new Book(title, category);
  books.push(newBook);
  return newBook;
}

function getBookById(id) {
  return books.find(book => book.id === id);
}

function printAllBooks() {
  console.log("--- רשימת הספרים בספריה ---");
  console.log(books);
}

function deleteBookById(id) {
  books = books.filter(book => book.id !== id);
}

function updateBook(id, newTitle, newCategory, isBorrowed) {
  const book = getBookById(id);
  if (book) {
    if (newTitle !== undefined) book.title = newTitle;
    if (newCategory !== undefined) book.category = newCategory;
    if (isBorrowed !== undefined) book.isBorrowed = isBorrowed;
    return book;
  }
  return null; 
}

module.exports = {
  addBook,
  getBookById,
  printAllBooks,
  deleteBookById,
  updateBook
};