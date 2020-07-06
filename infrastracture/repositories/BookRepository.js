import QueryBuilder from "../networking/QueryBuilder";
import NetworkAgentFactory from "../networking/NetworkAgentFactory";
import { baseUrl } from "../../../config";

export default class BookRepository {
    constructor(){
        this.networkAgent = NetworkAgentFactory.create();
    }
    getBooks(callback,filter){
        let api = QueryBuilder.build(`${baseUrl}book`,filter);
        this.networkAgent.get(api, callback );
    }
}
