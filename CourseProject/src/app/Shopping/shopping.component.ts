import { Component } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";

@Component({
    selector: "app-shopping",
    templateUrl:"./shopping.component.html"
})
export class ShoppingComponent{


    ingredients: Ingredient[] =[
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
    ];

    onIngredientAdded(event:Ingredient){
        this.ingredients.push(event)
  
    }
}