import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector:"app-reciepe-item",
    templateUrl:"./recipeitem.component.html"
})
export class RecipeItemComponent implements OnInit{

    @Input() recipe:Recipe;
    @Output() loadRecipeDetailsEvent = new EventEmitter<Recipe>()

    constructor() {}
    ngOnInit(){

    }

    onItemClick(){
        console.log(this.recipe)
        this.loadRecipeDetailsEvent.emit(this.recipe);
    }
}