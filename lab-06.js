/*
  Name: Brad Walther
*/

class Book {
    constructor(titleOfBook, authorOfBook, pubDateOfBook, serialCode) {
      this.title = titleOfBook;
      this.author = authorOfBook;
      this.pubDate = pubDateOfBook;
      this.isbn = serialCode;
    }
  }


  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    deleteBook(isbn) {
        // (1) Find the index of the book with the given isbn within the "_books" array.
        
        let indexOfBookRemove = null;
        
        let index = 0;

        for (const book of this._books) {
            if (book.isbn == isbn) {
                indexOfBookRemove = index
                break;
            }
            index += 1;
        }
        // (2) Once the index has been found, remove the entry from "_books". (DONE)
        this._books.splice(indexOfBookRemove, 1);
    }

    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`);
      }
    }
  }









// Create library object
const library = new Library("New York Times Best Seller List");

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Atomic Habits", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();