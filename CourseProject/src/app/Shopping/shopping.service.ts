import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingService{

    ingredientsChanged = new Subject<Ingredient[]>()

    startedEditing = new Subject<number>()
    addIngredients(ingred: Ingredient) {
        console.log(ingred)
        this.ingredients.push(ingred)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredientArray(ingred: Ingredient[]) {
        console.log(ingred)
        this.ingredients.push(...ingred)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    
    getIngredients(){
       return this.ingredients.slice();
    }
    private ingredients: Ingredient[] =[
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
    ];

    editIngredient(index:number,ingred:Ingredient){
        this.ingredients[index] = ingred
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredients(index:number){
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next(this.ingredients.slice())
    }


}