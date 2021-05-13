import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingService{

    ingredientsChanged = new EventEmitter<Ingredient[]>()
    addIngredients(ingred: Ingredient) {
        console.log(ingred)
        this.ingredients.push(ingred)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredientArray(ingred: Ingredient[]) {
        console.log(ingred)
        this.ingredients.push(...ingred)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    
    getIngredients(){
       return this.ingredients.slice();
    }
    private ingredients: Ingredient[] =[
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
    ];
}