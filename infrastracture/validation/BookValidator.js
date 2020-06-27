export default class BookValidator{
    constructor(){
        this.errors = {};
        this.isValid = true;
    }
    validate(book){
        if (!book.name) {
            this.isValid = false
            this.errors['name'] = 'name can\'t be empty'    
        }
        if (isNaN(book.price)) {
            this.isValid = false
            this.errors['price'] = 'price must be a vaild price'
        }else if (book.price < 0) {
            this.isValid = false
            this.errors['price'] = 'price must be a vaild price'
        }
        if (!book.authorName) {
            this.isValid = false
            this.errors['authorName'] = 'author name can\'t be empty'    
        }
    }
}