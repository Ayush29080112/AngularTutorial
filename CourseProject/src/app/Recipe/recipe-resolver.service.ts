import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { DataStorageService } from "../Shared/datastorage.service";
import { AppState } from "../store/app.store";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { FetchRecipes, SET_RECIPES } from "./store/recipe.action";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    
    constructor(private action$:Actions, private store:Store<AppState>){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {

        return this.store.select('recipe').pipe(
            take(1),
            map(recipeState=>{return recipeState.recipes}),
            switchMap((recipes)=>{
                if(recipes.length ===0){
                    this.store.dispatch(new FetchRecipes)
                    return this.action$.pipe(ofType(SET_RECIPES), take(1))
                }else{
                    return of(recipes)
                }
            })
        )
      
    }

}