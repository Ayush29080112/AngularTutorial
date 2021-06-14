import { Ingredient } from "src/app/Shared/ingredient.model";
import * as ShoppingListAction from "./shoppingList.action";


export interface ShoppingListState{
    ingredients:Ingredient[],
    edittedIngredient:Ingredient,
    editedIndex:number
}

export const initialState : ShoppingListState = {ingredients: [
    new Ingredient("Apples", 5),
    new Ingredient("Tomato", 10)
],
edittedIngredient:null,
editedIndex:-1}

export function shoppingListReducer(state: ShoppingListState = initialState, action:ShoppingListAction.ShoppingListAction){
    switch(action.type){
        case ShoppingListAction.ADD_INGREDIENT:
            return{...state,
                ingredients:[...state.ingredients,action.payload]
            }

        case ShoppingListAction.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:[...state.ingredients, ...action.payload]
            }
        case ShoppingListAction.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIndex];
            const updateIngredient = {...ingredient,
                ...action.payload.ingrdient}
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIndex] = updateIngredient;
            return{
                ...state,
                ingredients:updatedIngredients
            }
        case ShoppingListAction.DELETE_INGREDIENT:
            
            return{
                ...state,
                ingredients:state.ingredients.filter((ing, index)=>{
                    return !(state.editedIndex === index);
                })
            }

        case ShoppingListAction.START_EDIT:
            return{
                ...state,
                editedIndex:action.payload,
                edittedIngredient : {...state.ingredients[action.payload]}
            }

        case ShoppingListAction.STOP_EDIT:
            return{
                ...state,
                editedIndex: -1,
                edittedIngredient : null
            }
        default:
            return state
    }
}