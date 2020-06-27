import { BookValidator } from "../../infrastracture";

export default class BookServices{
    constructor(){
        this.bookValidator = new BookValidator;
    }
    getBooks(callBack,bookFilter = null){
        this.bookRepository.getBooks(callBack,bookFilter);
    }
    addBookToStore(book,onSucces,onFail){
        validator = this.bookValidator.validate(book);
        if(validator.isValid){
            onSucces()
        }else{
            onFail(validator.errors)
        }
    }
}
