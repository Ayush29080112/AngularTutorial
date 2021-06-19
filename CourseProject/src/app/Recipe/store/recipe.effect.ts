import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { AppState } from "src/app/store/app.store";
import { Recipe } from "../recipe.model";
import { FETCH_RECIPES, SAVE_RECIPES, SetRecipes } from "./recipe.action";

@Injectable()
export class RecipeEffects{

    constructor(private action$:Actions, private http:HttpClient, private store:Store<AppState>){}

   
    fetchRecipes = createEffect(()=>{
        return this.action$.pipe(
            ofType(FETCH_RECIPES),
            switchMap(()=>{
                return this.http.get<Recipe[]>('https://ng-recipe-project-97ba3-default-rtdb.firebaseio.com/recipes.json')
            }),
            map(recipes=>{
                return recipes.map(recipe =>{
                    return{...recipe, ingredient:recipe.ingredient?recipe.ingredient:[]}
            })
            }), 
            map((recipes)=>{ return new SetRecipes(recipes)})

        )
    })

    saveRecipes = createEffect(()=>{
        return this.action$.pipe(
            ofType(SAVE_RECIPES),
            withLatestFrom(this.store.select('recipe')),
            switchMap(([actions,recipeState])=>{
                console.log(recipeState.recipes)
                return this.http.put('https://ng-recipe-project-97ba3-default-rtdb.firebaseio.com/recipes.json',recipeState.recipes)

            })
        )},{dispatch:false}
        )
}