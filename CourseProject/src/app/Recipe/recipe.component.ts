import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector:"app-recipe",
    templateUrl:"./recipe.component.html"
})
export class RecipeComponent{

    recipe:Recipe;
    loadRecipe(recipe:Recipe){
        console.log(recipe)
        this.recipe=recipe;
    }

}