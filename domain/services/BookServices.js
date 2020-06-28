import { BookValidator } from "../../infrastracture";
import BookRepository from "../../infrastracture/repositories/BookRepository";

export default class BookServices{

    constructor(){
        this.bookRepository = new BookRepository;
        this.validator = new BookValidator;
    }

    getBooks(callBack,bookFilter = null){
        this.bookRepository.getBooks(callBack,bookFilter);
    }

    addBookToStore(book){
        if(!this.validator.hasErrors()){
            console.log(book)
        }
    }

}
