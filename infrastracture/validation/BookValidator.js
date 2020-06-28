export default class BookValidator{
    constructor(){
        this.errors = {
            name:'',
            price:'',
            authorName:'',
        };
    }
    validateBookField(field,value){
        switch (field) {
            case 'name':
                if (!value) {
                    this.errors['name'] = 'name can\'t be empty'    
                }else{
                    this.errors['name'] = ''
                }
                break;

            case 'price':
                if (isNaN(value)) {
                    this.errors['price'] = 'price must be a vaild price'
                }else if (value == ''){
                    this.errors['price'] = 'price can\'t be empty'    
                }else if (value <= 0) {
                    this.errors['price'] = 'price must be a greater than zero'
                }else{
                    this.errors['price'] = ''
                }
                break;

            case 'authorName':
                if (!value) {
                    this.isValid = false
                    this.errors['authorName'] = 'author name can\'t be empty'    
                }else{
                    this.errors['authorName'] = ''
                }
                break;
                
        }
    }
    hasErrors(){
        for (const prop in this.errors) {
            if (this.errors.hasOwnProperty(prop) && (this.errors[prop]!=='')) {
                return true
            }
        }
        return false
    }
    hasErrorFor(field){
        return (this.errors[field] != '' );
    }

    getErrorFor(field){
        return this.errors[field];
    }
}
