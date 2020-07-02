import { BookValidator } from "../../infrastracture";
import BookRepository from "../../infrastracture/repositories/BookRepository";
import CreateBook from "../events/emiters/CreateBook";

export default class BookServices{

    constructor(){
        this.bookRepository = new BookRepository;
        this.validator = new BookValidator;
        this.emiter = new CreateBook;
    }

    getBooks(callBack,bookFilter = null){
        this.bookRepository.getBooks(callBack,bookFilter);
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
