import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe("Palak Paneer","Cottage Cheese cooked in Spinach Gravy","https://shwetainthekitchen.com/wp-content/uploads/2014/03/DSC_1095.jpg",[new Ingredient('Cottage cheese',1),new Ingredient('Spinach',10)]),
        new Recipe("Kaju Paneer","Cottage Cheese cooked with Cashew gravy","https://ohdishkitchen.in/wp-content/uploads/2020/05/Kaju-Paneer-masala.jpeg",[new Ingredient('Cottage cheese',1),new Ingredient('Cashew',10)])
    ];

    loadRecipeDetailsEvent = new EventEmitter<Recipe>()

    getRecipies(){
        return this.recipes.slice();
    }
}