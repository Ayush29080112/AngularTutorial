import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/operators";
import { AppState } from "src/app/store/app.store";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    

    constructor(private store:Store<AppState>){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        return this.store.select('auth').pipe(take(1),map((appState)=>{return appState.user}),exhaustMap((user)=>{
            console.log(user)
            if(user===null){
                return next.handle(req);
            }
            const reqModified = req.clone({params:new HttpParams().set('auth',user.token?user.token:'')});
            return next.handle(reqModified)
        }))

        
    }
    
}