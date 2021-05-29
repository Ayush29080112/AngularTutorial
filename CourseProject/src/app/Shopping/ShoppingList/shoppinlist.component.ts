import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
    selector:"app-shopping-list",
    templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit, OnDestroy{

   ingredients:Ingredient[];
   private ingredientsChanged : Subscription
   constructor(private shoppingService:ShoppingService){}
    ngOnDestroy(): void {
        this.ingredientsChanged.unsubscribe()
    }
    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients()
        this.ingredientsChanged = this.shoppingService.ingredientsChanged.subscribe((ingreds)=>{this.ingredients=ingreds})
    }
   
    onEditIndex(i:number){
        this.shoppingService.startedEditing.next(i)
    }
}