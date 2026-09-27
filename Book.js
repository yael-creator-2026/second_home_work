let currentId = 1;

class Book {
  constructor(title, category) {
    this.id = currentId++; 
    this.title = title;
    this.category = category;
    this.isBorrowed = false; 
  }
}

module.exports = Book;