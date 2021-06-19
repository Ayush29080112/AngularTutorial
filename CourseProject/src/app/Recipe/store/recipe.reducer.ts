import { Recipe } from "../recipe.model";
import { ADD_RECIPE, DeleteRecipe, DELETE_RECIPE, RecipeActions, SET_RECIPES, UPDATE_RECIPE } from "./recipe.action";


export interface RecipeState{
    recipes: Recipe[]
}

const initialState: RecipeState = {recipes:[]}  

export function recipeReducer( state:RecipeState = initialState,action:RecipeActions){
    switch(action.type){
        case SET_RECIPES:
            return{
                ...state,
                recipes : [...action.payload]
            }

        case ADD_RECIPE:
            return{
                ...state,
                recipes : [...state.recipes,action.payload]
            }

        case UPDATE_RECIPE:

            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {...recipe,...action.payload.recipe}
            const recipesToUpdate = [...state.recipes]
            recipesToUpdate[action.payload.index]  = updatedRecipe;
            return{
                ...state,
                recipes:recipesToUpdate

            }
        case DELETE_RECIPE:
            return{
                ...state,
                recipes: state.recipes.filter((recipe,index)=>{
                    return !(action.payload === index )
                })
            }
        default:
            return state;
    }
}