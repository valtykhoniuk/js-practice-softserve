class Book {
  #title;
  #author;
  #isbn;
  #quantity;

  constructor(title, author, isbn, quantity) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#quantity = quantity;
  }

  restock(quantity) {
    this.#quantity += quantity;
  }

  sell(quantity) {
    if (quantity <= 0) {
      console.log("Sell amount must be positive.");
      return;
    }
    if (quantity > this.#quantity) {
      console.log(`Not enough copies of "${this.#title}" to sell.`);
    } else {
      this.#quantity -= quantity;
    }
  }
}

class Inventory {
  #books;
  constructor() {
    this.#books = [];
  }
  addBook(book) {
    this.#books.push(book);
  }

  findBookByTitle(title) {
    return this.#books.find((book) => book.title === title);
  }

  listBooks() {
    this.#books.forEach((book) => {
      console.log(
        `${book.title} by ${book.author} (ISBN: ${book.isbn}) - Quantity: ${book.quantity}`
      );
    });
  }
}
