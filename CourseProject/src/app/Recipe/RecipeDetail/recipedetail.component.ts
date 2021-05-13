import { Component, Input } from "@angular/core";
import { ShoppingService } from "src/app/Shopping/shopping.service";
import { Recipe } from "../recipe.model";

@Component({
    selector:"app-recipe-detail",
    templateUrl:"./recipedetail.component.html"
})
export class RecipeDetailComponent{

    @Input() recipe: Recipe;
    constructor(private shoppingService:ShoppingService){}

    addIngredientsToShoppingList(){
        this.shoppingService.addIngredientArray(this.recipe.ingredient)
    }

}