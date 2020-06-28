export default class BookRepository {
    getBooks(callback,filter){
        let books =[
            {
                id :1,
                name : 'macbeth',
                category : 'horrer',
                price : 120,
                authorName : 'shakesper',
                edition : 'first',
            },
            {
                id :2,
                name : 'macbeth',
                category : 'horrer',
                price : 120,
                authorName : 'shakesper',
                edition : 'first',
            },
        ];
        callback(books);
    }
}