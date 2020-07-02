class AuthenticationManager {
    static hasSession(){
        const isLogged = !!sessionStorage.getItem('user');
        return isLogged;
    }

    static start(callback){
        if (AuthenticationManager.hasSession()) {
            callback(true)
        }
        callback(false)
    }
    static startSession(credintials){
        if (AuthenticationManager.hasSession()) {
            UserRepository.logIn(credintials,(user)=>{
                sessionStorage.setItem('user',user);
            })
            return true
        }
        return false
    }
}
