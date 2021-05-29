import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector:"app-recipe",
    templateUrl:"./recipe.component.html"
})
export class RecipeComponent implements OnInit{

    recipe:Recipe;

    constructor(private recipeService:RecipeService, private routes: Router, private activeRoute:ActivatedRoute){}

    ngOnInit(){
        // console.log('I am being called')
        // this.recipeService.loadRecipeDetailsEvent.subscribe(
        //     (selectedRecipe:Recipe)=> {
        //         console.log(selectedRecipe);
        //         this.recipe=selectedRecipe;
        //     }
        // )

        // if(this.recipe == undefined){
        //     this.routes.navigate(['please','selectRecipe'], {relativeTo:this.activeRoute})
        // }
    }

}