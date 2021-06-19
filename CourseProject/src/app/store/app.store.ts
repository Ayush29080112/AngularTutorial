import { ActionReducerMap } from "@ngrx/store";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { recipeReducer, RecipeState } from "../Recipe/store/recipe.reducer";
import { shoppingListReducer, ShoppingListState } from "../Shopping/store/shoppinglist.reducer";

export interface AppState{
    shoppingList:ShoppingListState,
    auth: AuthState,
    recipe: RecipeState
}

export const reducers: ActionReducerMap<AppState,any> = {shoppingList:shoppingListReducer, auth:authReducer, recipe:recipeReducer}