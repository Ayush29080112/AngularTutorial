import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../Recipe/recipe.model";
import { RecipeService } from "../Recipe/recipe.service";
import {exhaustMap, map, take, tap} from 'rxjs/operators'
import { AuthService } from "../auth/auth/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.store";
import { SetRecipes } from "../Recipe/store/recipe.action";

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService:RecipeService, private authService: AuthService, private store:Store<AppState>){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipies()
        this.http.put('https://ng-recipe-project-97ba3-default-rtdb.firebaseio.com/recipes.json',recipes).
        subscribe((response)=>console.log(response))
    }

    // fetchRecipies(){
       
    //         return this.http.get<Recipe[]>('https://ng-recipe-project-97ba3-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes=>{
    //         return recipes.map(recipe =>{
    //             return{...recipe, ingredient:recipe.ingredient?recipe.ingredient:[]}
    //         })
    //     }),tap(recipes => this.store.dispatch(new SetRecipes(recipes))))
       
        
    // }
}