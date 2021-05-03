import { Component } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";

@Component({
    selector:"app-shopping-list",
    templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList{

    ingredients: Ingredient[] =[
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
    ];

}