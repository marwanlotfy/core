import io from 'socket.io-client'

export default class Pusher {
    constructor(pusherUrl){
        this.socket = io(pusherUrl);
    }

    when(event,callback){
        this.socket.on(event,callback);
    }

    notify(event,object){
        this.socket.emit(event,object);
    }
}
