import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-list",
    templateUrl:"./recipelist.component.html"
})
export class RecipeListComponent implements OnInit{
    
    recipes: Recipe[];
    constructor(private recipesService: RecipeService){}
    ngOnInit(): void {
        this.recipes = this.recipesService.getRecipies() 
    }

}
