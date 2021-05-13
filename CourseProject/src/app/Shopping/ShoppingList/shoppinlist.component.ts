import { Component, Input, OnInit } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
    selector:"app-shopping-list",
    templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit{

   ingredients:Ingredient[];
   constructor(private shoppingService:ShoppingService){}
    ngOnInit(): void {
        this.ingredients = this.shoppingService.getIngredients()
        this.shoppingService.ingredientsChanged.subscribe((ingreds)=>{this.ingredients=ingreds})
    }
   
}