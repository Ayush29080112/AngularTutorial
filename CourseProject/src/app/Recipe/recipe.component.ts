import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { DataStorageService } from "../Shared/datastorage.service";
import { AppState } from "../store/app.store";
import { Recipe } from "./recipe.model";
import { FetchRecipes } from "./store/recipe.action";

@Component({
    selector:"app-recipe",
    templateUrl:"./recipe.component.html"
})
export class  RecipeComponent implements OnInit{

    recipe:Recipe;

    constructor(private dataStorageService:DataStorageService, private routes: Router, private activeRoute:ActivatedRoute, private store:Store<AppState>){}

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

        this.store.dispatch(new FetchRecipes())
    }

}