import Pusher from './../../infrastracture/Pusher/Pusher'

import { pusherUrl } from './../../../config'
export default class AddBookEvent{
    constructor(){
        this.lisinters = [];
        this.pusher = new Pusher(pusherUrl);
        this.push();
    }

    doForMe(callback){
        this.lisinters.push(callback);
    }

    push(){
        this.pusher.when('newBookAdded', (book) => {
            for (let i = 0; i < this.lisinters.length; i++) {
                const fn = this.lisinters[i];
                fn(book)
            }
        })
    }

}
