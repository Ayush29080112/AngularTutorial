import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, ReplaySubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "../user.model";


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

        userSubject = new BehaviorSubject<User>(new  User());

        private tokenExpirationTimer:any
        constructor(private http: HttpClient, private router:Router){}

        signUp(email:string, password:string){
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBU4jNyh09y2K8RpRzVAkusT4nQdfDidA4',{
                email:email,
                password:password,
                returnSecureToken:true
            }).pipe(catchError(this.handleError), tap((response)=>{
                const expirationDate = new Date(new Date().getTime() + +response.expiresIn*1000)
                const user = new User(response.email, response.localId,response.idToken,expirationDate)
                this.autoLogout(+response.expiresIn*1000)
                this.userSubject.next(user)
            }))
        }

        login(email:string, password:string){
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBU4jNyh09y2K8RpRzVAkusT4nQdfDidA4',{
                email:email,
                password:password,
                returnSecureToken:true
            }).pipe(catchError( this.handleError),tap((response)=>{
                const expirationDate = new Date(new Date().getTime() + +response.expiresIn*1000)
                const user = new User(response.email, response.localId,response.idToken,expirationDate)
                this.autoLogout(+response.expiresIn*1000)
                this.userSubject.next(user)
                localStorage.setItem('user',JSON.stringify(user))
            }))
        }

        logout(){
            this.userSubject.next(new User());
            this.router.navigate(['/auth'])
            localStorage.removeItem('user');
            if(this.tokenExpirationTimer){
                clearTimeout(this.tokenExpirationTimer)
            }
        }

        autoLogout(expirationNumber:number){
            this.tokenExpirationTimer = setTimeout(()=>{this.logout()},expirationNumber)
        }

        autoLogin(){

            let storedString =localStorage.getItem('user')
            console.log(storedString)
            const user:  {email:string,id:string,_token:string,_tokenExpirationDate:string} = JSON.parse( storedString?storedString:'')
            let loggedInUser = new User(user.email,user.id,user._token, new Date(user._tokenExpirationDate))
            console.log(loggedInUser)
            if(!loggedInUser){
                return;
            }
            console.log(loggedInUser.token)
            if(loggedInUser.token){
                const expirationDuration = new Date(user._tokenExpirationDate).getTime() - new Date().getTime()
                     this.autoLogout(expirationDuration)
                   this.userSubject.next(loggedInUser)
            }
            


        }

        private handleError(errorResponse: HttpErrorResponse ){
            let errorMessage = 'An Undefined Error occured'
                if(!errorResponse.error || !errorResponse.error.error){
                    return throwError(errorMessage)
                }else{
                    switch(errorResponse.error.error.message){
                        case ('EMAIL_EXISTS'):
                            errorMessage ='This email already exists';
                            break;
                        case ('EMAIL_NOT_FOUND'):
                            errorMessage = 'Email Id Does not exist'
                    }
                    return throwError(errorMessage)
                }
        }
}