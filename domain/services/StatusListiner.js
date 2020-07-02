export default class StatusListiner {
    static start(updateOnlineStatus,updateOfflineStatus){
        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOfflineStatus);
    }
}
