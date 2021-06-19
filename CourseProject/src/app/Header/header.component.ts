import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth/auth.service";
import { Logout } from "../auth/store/auth.action";
import { User } from "../auth/user.model";
import { FetchRecipes, SaveRecipes } from "../Recipe/store/recipe.action";
import { DataStorageService } from "../Shared/datastorage.service";
import { AppState } from "../store/app.store";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy{
    private userSub : Subscription;
    user:User;
    isAuthenticated= false

    constructor(private router: Router, private dataStorageService: DataStorageService, private authService:AuthService, private store: Store<AppState>) {}
    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
    ngOnInit(): void {
        this.userSub = this.store.select('auth').pipe(map(authState=>{return authState.user})).subscribe(user =>  this.isAuthenticated = !!user)
    }

    onLogout(){
        this.store.dispatch(new Logout())
    }

    onSaveData(){
        this.store.dispatch(new SaveRecipes());
    }

    onFetchData(){
        this.store.dispatch(new FetchRecipes())
    }
}