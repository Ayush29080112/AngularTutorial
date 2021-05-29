import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingService } from "src/app/Shopping/shopping.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector:"app-recipe-detail",
    templateUrl:"./recipedetail.component.html"
})
export class RecipeDetailComponent implements OnInit{

    recipe: Recipe;
    id: number
    constructor(private shoppingService:ShoppingService, private activeRoute:ActivatedRoute, private recipeService: RecipeService, private router:Router){}
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
        this.shoppingService.addIngredientArray(this.recipe.ingredient)
    }

    onDeleteRecipe(){
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/'])
    }

}