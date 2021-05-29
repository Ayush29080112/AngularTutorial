import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-list",
    templateUrl:"./recipelist.component.html"
})
export class RecipeListComponent implements OnInit,OnDestroy{
    
    recipes: Recipe[];
    subscription : Subscription;
    constructor(private recipesService: RecipeService){}
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
    ngOnInit() {

        this.recipes = this.recipesService.getRecipies()
        this.subscription= this.recipesService.loadRecipeDetailsEvent.subscribe(
           (recipesUpdated) =>this.recipes =recipesUpdated
        )
        
    }

}
