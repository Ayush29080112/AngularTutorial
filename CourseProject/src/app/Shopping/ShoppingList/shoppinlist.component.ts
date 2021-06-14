import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { AppState } from "src/app/store/app.store";

import { StartEdit } from "../store/shoppingList.action";
import { ShoppingListState } from "../store/shoppinglist.reducer";

@Component({
    selector:"app-shopping-list",
    templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit, OnDestroy{

   ingredients:Observable<ShoppingListState>;
   private ingredientsChanged : Subscription
   constructor( private store:Store<AppState>){}
    ngOnDestroy(): void {
        // this.ingredientsChanged.unsubscribe()
    }
    ngOnInit(): void {
        this.ingredients = this.store.select('shoppingList')
        // this.ingredientsChanged = this.shoppingService.ingredientsChanged.subscribe((ingreds)=>{this.ingredients=ingreds})
    }
   
    onEditIndex(i:number){

        this.store.dispatch(new StartEdit(i));
        // this.shoppingService.startedEditing.next(i)
    }
}