import { EventEmitter } from "@angular/core";


export class AuthService{
    loggedIn = false;
    loginEmitter= new EventEmitter<boolean>()
    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=> {
                setTimeout(()=>{resolve(this.loggedIn)},800)
            }
        );
        return promise
    }

    logIn(){
        this.loggedIn = true;
        this.loginEmitter.emit(this.loggedIn)
    }

    logOut(){
        this.loggedIn = false;
        this.loginEmitter.emit(this.loggedIn)
    }
}