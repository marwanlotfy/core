import Category from "./Category"
import Author from "./Author"

function Book() {
    this.id =''
    this.name = ''
    this.category = new Category
    this.price = ''
    this.authorName = ''
    this.author = new Author;
    this.edition = ''
}
export default Book ;
