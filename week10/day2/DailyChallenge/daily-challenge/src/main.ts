interface Book {
  title: string,
  author: string,
  isbn: string,
  publishedYear: number,
  genre?: string
}

class Library {
  constructor(
    protected books: Book[],
  ){}
  public addBook(title:string, author:string, 
    isbn:string, publishedYear:number, genre?:string) {
      this.books.push({title, author, isbn,publishedYear,genre})
  }
  public getBookDetails(isbn: string) {
    return this.books.find(elem => elem.isbn === isbn)
  }
}


const myLib = new Library([])

myLib.addBook('wow', 'Tolkin', 'what is isbn?',2020, 'fantasy')
myLib.addBook('wow', 'Tolkin', 'what?',2020, 'fantasy')

console.log(myLib.getBookDetails('what?'));


class DigitalLibrary extends Library {
  constructor(
    readonly website:string
  ){
    super([])
  }
  public listBooks() {
    return this.books.map(elem => elem.title)
  }
}

const my2lib = new DigitalLibrary('')

my2lib.addBook('wow', 'Tolkin', 'what is isbn?',2020, 'fantasy')
my2lib.addBook('wow', 'Tolkin', 'what?',2020, 'fantasy')
console.log(my2lib.listBooks());
