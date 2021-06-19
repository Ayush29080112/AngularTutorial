import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, ReplaySubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "../user.model";
import {environment} from  '../../../environments/environment' 
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.store";
import { Login, Logout } from "../store/auth.action";



export interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered ?:boolean

}
@Injectable({providedIn:'root'})
export class AuthService{

        // userSubject = new BehaviorSubject<User>(new  User());

        private tokenExpirationTimer:any
        constructor(private store:Store<AppState>){}

        

        setLogoutTimer(expirationNumber:number){
            this.tokenExpirationTimer = setTimeout(()=>{this.store.dispatch(new  Logout())},expirationNumber)
        }

        clearLogOutTimer(){
            if(this.tokenExpirationTimer){
                clearTimeout(this.tokenExpirationTimer)
                this.tokenExpirationTimer = null
            }
        }

       
       
}