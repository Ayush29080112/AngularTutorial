import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector:"app-recipe",
    templateUrl:"./recipe.component.html"
})
export class RecipeComponent implements OnInit{

    recipe:Recipe;

    constructor(private recipeService:RecipeService){}

    ngOnInit(){
        console.log('I am being called')
        this.recipeService.loadRecipeDetailsEvent.subscribe(
            (selectedRecipe:Recipe)=> {
                console.log(selectedRecipe);
                this.recipe=selectedRecipe;
            }
        )
    }

}