export default class FetchAdaptor{
    constructor(){
        this.headers = {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        }
    }
    setHeaders(headers){
        this.headers = headers;
        return this;
    }
    get(api,callback){
        fetch(api,{
            method:'GET',
            headers:this.headers
        })
        .then( res => res.json() )
        .then( res => callback( res ))
        .catch( res => callback( res ));
    }
}
