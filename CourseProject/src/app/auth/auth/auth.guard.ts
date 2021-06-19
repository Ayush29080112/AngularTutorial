import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AppState } from "src/app/store/app.store";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService, private router: Router, private store:Store<AppState>){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
         return this.store.select('auth').pipe(take(1),map((authState)=>{return authState.user}),map((user)=>{ 
             console.log(user); 
             if(!!user){
                  return true;
                }
                console.log('I am here in auth guard' )
                return this.router.createUrlTree(['/auth'])
            }
            )
        )
    }
    
}