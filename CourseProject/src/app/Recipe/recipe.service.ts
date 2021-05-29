import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../Shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    deleteRecipe(id: number) {
        this.recipes.splice(id,1)
        this.loadRecipeDetailsEvent.next(this.recipes)
    }
    update(id: number, recipe: Recipe) {
      this.recipes[id] = recipe
      this.loadRecipeDetailsEvent.next(this.recipes)
    }

    private recipes: Recipe[] = [
        new Recipe("Palak Paneer","Cottage Cheese cooked in Spinach Gravy","https://shwetainthekitchen.com/wp-content/uploads/2014/03/DSC_1095.jpg",[new Ingredient('Cottage cheese',1),new Ingredient('Spinach',10)]),
        new Recipe("Kaju Paneer","Cottage Cheese cooked with Cashew gravy","https://farm7.static.flickr.com/6212/6243832969_b5eec9b2ee_z.jpg",[new Ingredient('Cottage cheese',1),new Ingredient('Cashew',10)])
    ];

    loadRecipeDetailsEvent = new Subject<Recipe[]>()

    getRecipies(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.loadRecipeDetailsEvent.next(this.recipes)
    }
}