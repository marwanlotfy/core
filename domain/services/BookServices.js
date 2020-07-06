import { BookValidator } from "../../infrastracture";
import BookRepository from "../../infrastracture/repositories/BookRepository";
import CreateBook from "../events/emiters/CreateBook";

export default class BookServices{

    constructor(){
        this.bookRepository = new BookRepository;
        this.validator = new BookValidator;
        this.emiter = new CreateBook;
        this.lastPage = null;
    }

    getBooks(callBack,bookFilter = null){
        let handler = ( res ) => {
            console.log('from handler' , res )
            this.lastPage = res.lastPage
            callBack(res.books);
        }
        console.log('are you here',bookFilter.page)
        this.bookRepository.getBooks(handler,bookFilter);
    }


    haveBooksFor(bookFilter){
        if (!this.lastPage) {
           return true;
        }
        return bookFilter.page < this.lastPage
    }

    addBookToStore(book){
        if(!this.validator.hasErrors()){
            book.id=4;
            book.edition='noooooo';
            book.category='ohhhhhh';
            this.emiter.notifyUser(book);
        }
    }

}
