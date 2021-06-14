import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ShoppingService } from "src/app/Shopping/shopping.service";
import { AddIngredients } from "src/app/Shopping/store/shoppingList.action";
import { AppState } from "src/app/store/app.store";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-detail",
    templateUrl:"./recipedetail.component.html"
})
export class RecipeDetailComponent implements OnInit{

    recipe: Recipe;
    id: number
    constructor(private shoppingService:ShoppingService, private activeRoute:ActivatedRoute, private recipeService: RecipeService, private router:Router, private store:Store<AppState>){}
    ngOnInit(): void {
        this.activeRoute.params.subscribe((params)=>{
            this.id = +params['id']
            this.recipe = this.recipeService.getRecipe(this.id)
        })
    }


    editRecipe(){
        this.router.navigate(['edit'],{relativeTo:this.activeRoute})

    }
    
    addIngredientsToShoppingList(){
        // this.shoppingService.addIngredientArray(this.recipe.ingredient)
        this.store.dispatch(new AddIngredients(this.recipe.ingredient))
    }

    onDeleteRecipe(){
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/'])
    }

}