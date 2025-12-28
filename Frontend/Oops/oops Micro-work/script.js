class Library {
    constructor(){
        this.books = []

    }
    addBook(book){
        this.books.push(book)
    }
    listAllBooks(){
        this.books.forEach(function(books){
            console.log(`${books.title} by ${books.author} published in ${books.year}`)
        })

    }
     
    
}


let delhiLibrary = new Library()
delhiLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald")
delhiLibrary.addBook("To Kill a Mockingbird", "Harper Lee")
delhiLibrary.addBook( "1984", "George Orwell")
// delhiLibrary.listAllBooks()

let mathuraLibrary = new Library()
mathuraLibrary.addBook("The Mathura", "Harper Lee")
mathuraLibrary.addBook("The Mathura", "Harper Lee")
mathuraLibrary.addBook("Mathura", "Harper Lee")
// mathuraLibrary.listAllBooks()



class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
        this.ReadStatus = false
    } 

    BookInfo(){
        console.log(`${this.ReadStatus  ? "✅" :"❌" }${this.title} is written by ${this.author} and published in ${this.year}. You have ${this.ReadStatus ? "read" : "not read"} this book? `)
    }
    changeBookReadStatus(){
        this.ReadStatus = !this.ReadStatus
    }
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)
let book3 = new Book("1984", "George Orwell", 1949)
 
let BhopalLibrary = new Library()
BhopalLibrary.addBook(book1, book2, book3)