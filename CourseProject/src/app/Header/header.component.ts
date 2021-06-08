import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth/auth.service";
import { User } from "../auth/user.model";
import { DataStorageService } from "../Shared/datastorage.service";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy{
    private userSub : Subscription;
    user:User;
    isAuthenticated= false

    constructor(private router: Router, private dataStorageService: DataStorageService, private authService:AuthService) {}
    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
    ngOnInit(): void {
        this.userSub = this.authService.userSubject.subscribe(user =>  this.isAuthenticated =  user.token?true:false)
    }

    onLogout(){
        this.authService.logout()
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipies().subscribe();
    }
}