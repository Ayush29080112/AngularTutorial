import { ActionReducerMap } from "@ngrx/store";
import { shoppingListReducer, ShoppingListState } from "../Shopping/store/shoppinglist.reducer";

export interface AppState{
    shoppingList:ShoppingListState
}

export const reducers: ActionReducerMap<AppState,any> = {shoppingList:shoppingListReducer}