import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";
import { User } from "../user.model";

import { AUTO_LOGIN, AUTO_LOGOUT, LOGIN, Login, LoginFailed, LoginStart, LOGIN_START, Logout, LOGOUT, SignupStart, SIGNUP_START } from "./auth.action";


export interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered ?:boolean

}

@Injectable()
export class AuthEffects{
    constructor(private action$:Actions, private http:HttpClient, private router:Router, private authService: AuthService){}
    @Effect()
    authLogin = this.action$.pipe(
        ofType(LOGIN_START),
        switchMap((auth:LoginStart)=>{
            console.log(auth)
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment['firebaseAPIKey'],{
                email:auth.payload.email,
                password:auth.payload.password,
                returnSecureToken:true
            }).pipe(
                tap((resdata)=>{this.authService.setLogoutTimer(+resdata.expiresIn*1000)}),
                map(resdata=>{
                const expirationDate = new Date(new Date().getTime() + +resdata.expiresIn*1000)
                localStorage.setItem('user',JSON.stringify(new User(resdata.email,resdata.localId,resdata.idToken,expirationDate)));
                return  new Login({email:resdata.email,userId:resdata.localId,token:resdata.idToken,expirationDate:expirationDate})
            }
            ),
                catchError(errorResponse =>{
                    let errorMessage = 'An Undefined Error occured'
                
                    switch(errorResponse.error.error.message){
                        case ('EMAIL_EXISTS'):
                            errorMessage ='This email already exists';
                            break;
                        case ('EMAIL_NOT_FOUND'):
                            errorMessage = 'Email Id Does not exist'
                    }
                  
                
                return of(new LoginFailed(errorMessage))
            }))
        })
    )

    @Effect()
    signUp = this.action$.pipe(ofType(SIGNUP_START),
        switchMap((data:SignupStart) =>{
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment['firebaseAPIKey'],{
                email:data.payload.email,
                password:data.payload.password,
                returnSecureToken:true
            }
        ).pipe(
            tap((resdata)=>{this.authService.setLogoutTimer(+resdata.expiresIn*1000)}),
            map((resdata)=>{
            const expirationDate = new Date(new Date().getTime() + +resdata.expiresIn*1000)
            localStorage.setItem('user',JSON.stringify(new User(resdata.email,resdata.localId,resdata.idToken,expirationDate)));
            return new Login({email:resdata.email,userId:resdata.localId,token:resdata.idToken,expirationDate:expirationDate})
        }), catchError(errorResponse =>{
            let errorMessage = 'An Undefined Error occured'
        
            switch(errorResponse.error.error.message){
                case ('EMAIL_EXISTS'):
                    errorMessage ='This email already exists';
                    break;
                case ('EMAIL_NOT_FOUND'):
                    errorMessage = 'Email Id Does not exist'
            }
          
        
        return of(new LoginFailed(errorMessage))
    }))}

    ));

    @Effect({dispatch:false})
    logout = this.action$.pipe(
        ofType(LOGOUT),
        tap( ()=>{localStorage.removeItem('user'), this.authService.clearLogOutTimer()})
    )

    @Effect()
    autoLogin = this.action$.pipe(
        ofType(AUTO_LOGIN),
        map(()=>{
            let storedString =localStorage.getItem('user')
            console.log(storedString)
            const user:  {email:string,id:string,_token:string,_tokenExpirationDate:string} = JSON.parse( storedString?storedString:'')
            let loggedInUser = new User(user.email,user.id,user._token, new Date(user._tokenExpirationDate))
            console.log(loggedInUser)
            
            if(loggedInUser.token){
                const expirationDuration = new Date(user._tokenExpirationDate).getTime() - new Date().getTime()
                //    this.autoLogout(expirationDuration)
                // //    this.userSubject.next(loggedInUser)
                this.authService.setLogoutTimer(expirationDuration);
                return new Login({email:loggedInUser.email,userId:loggedInUser.id,token:loggedInUser.token,expirationDate:new Date(user._tokenExpirationDate)})
            }
            return(new Logout())
        })
        
    )

    @Effect({dispatch:false})
    authSuccess = this.action$.pipe(
        ofType(LOGIN,LOGOUT), 
        tap(()=>{
            console.log('I am here now')
            this.router.navigate(['/'])
        }
        )
    )


}