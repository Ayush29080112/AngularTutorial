import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/store/app.store";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-list",
    templateUrl:"./recipelist.component.html"
})
export class RecipeListComponent implements OnInit,OnDestroy{
    
    recipes: Recipe[];
    subscription : Subscription;
    constructor(private recipesService: RecipeService, private store:Store<AppState>){}
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
    ngOnInit() {
        this.subscription = this.store.select('recipe').subscribe((recipeState)=>{this.recipes = recipeState.recipes})

        // this.recipes = this.recipesService.getRecipies()
        // this.subscription= this.recipesService.loadRecipeDetailsEvent.subscribe(
        //    (recipesUpdated) =>this.recipes = recipesUpdated
        // )
        
    }

}
