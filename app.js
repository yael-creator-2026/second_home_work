const bookService = require('./bookService');

bookService.addBook(" החווה של חוה"," ילדים");
bookService.addBook("אביחיל בן חיל", "ילדים");
bookService.addBook("ספר מתח מעניין", "מתח");

bookService.printAllBooks();

console.log("חיפוש ספר עם ID 2:");
console.log(bookService.getBookById(2));

console.log("עדכון ספר עם ID 1 למושאל:");
bookService.updateBook(1, "הארי פוטר ואבן החכמים", "פנטזיה", true);

bookService.printAllBooks();

console.log("מחיקת ספר עם ID 2:");
bookService.deleteBookById(2);

bookService.printAllBooks();
