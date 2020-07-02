import Pusher from './../../../infrastracture/Pusher/Pusher'
import { pusherUrl } from './../../../../config'
export default class CreateBook{
    constructor(){
        this.lisinters = [];
        this.pusher = new Pusher(pusherUrl);
    }

    notifyUser(book){
        this.pusher.notify('addNewBook',book);
    }
}
