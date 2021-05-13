import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
    selector:"app-reciepe-item",
    templateUrl:"./recipeitem.component.html"
})
export class RecipeItemComponent implements OnInit{

    @Input() recipe:Recipe;

    constructor(private recipeService:RecipeService) {}
    ngOnInit(){

    }

    onItemClick(){
        console.log(this.recipe)
        this.recipeService.loadRecipeDetailsEvent.emit(this.recipe);
    }
}