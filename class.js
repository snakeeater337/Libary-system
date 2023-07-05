class Library {
  bookShelves=[];

 addBookShelf(nameOfbookshelf){
  let bookShelf=new Bookshelf(nameOfbookshelf)
  this.bookShelves.push(bookShelf)
  console.log(bookShelf)
 }

 removeBookShelf(nameOfbookshelf){
  console.log("removing")
  this.bookShelves.forEach((bookShelf, i) => {
    if (nameOfbookshelf == bookShelf.nameOfBookshelf) {
      this.bookShelves.splice(i, 1);
      console.log("removed");
    }})
  }

 addBookToBookshelf(nameOfbook,titleOfbookshelf,authorOfbook){
  this.bookShelves.forEach(i => {
    if(titleOfbookshelf==i.nameOfBookshelf) {
      i.addBook(nameOfbook, authorOfbook);
      console.log(i.nameOfbook+"added");
    }})
  }

 
  removeBookFromBookshelf(nameOfbook, titleOfbookshelf) {
    this.bookShelves.forEach((bookShelf) => {
      if (titleOfbookshelf === bookShelf.nameOfBookshelf) {
        bookShelf.ArrayOfBooks.forEach((book, i) => {
          if (nameOfbook === book.titleOfBook) {
            bookShelf.ArrayOfBooks.splice(i, 1);
            console.log("removed");
          }
        });
      }
    });
  }

 displayLibrary(){
  this.bookShelves.forEach(i => {
    console.log(i)
  });
 }
 }

class Bookshelf {
constructor(nameOfBookshelf){
  this.nameOfBookshelf = nameOfBookshelf;
}
ArrayOfBooks=[];
addBook(titleOfBook,authorOfbook){
let book= new Books(titleOfBook,authorOfbook)
this.ArrayOfBooks.push(book)
}

removeBook(titleOfBook){
  this.ArrayOfBooks.forEach((book,i) => {
  if(titleOfBook==book.titleOfBook){
  this.ArrayOfBooks.splice(i,1)
}
})
}

displayBooks(){
  this.ArrayOfBooks.forEach(i => {
  console.log(i)
})
}

}
class Books {
constructor(titleOfBook,authorOfBook){
  this.titleOfBook = titleOfBook;
  this.authorOfBook = authorOfBook;
}
}

p = new Library();
p.addBookShelf("geography");
p.addBookShelf("math");
p.addBookToBookshelf("earth","geography","chahine");
p.addBookToBookshelf("mars","geography","chahine");
p.addBookToBookshelf("discrete","math","cigal");
p.displayLibrary();
console.log("--------------removing a book:------------------")
p.removeBookFromBookshelf("mars","geography")
p.displayLibrary();
console.log("---------------removing a shelf:-----------------")
p.removeBookShelf("geography");
p.displayLibrary();
console.log("----------------Now the shelves----------------")
s = new Bookshelf();
s.addBook("techlarious","elie");
s.displayBooks();
console.log("---------------removing a book:-----------------");
s.removeBook("techlarious");
s.displayBooks();