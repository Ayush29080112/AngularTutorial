import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:"app-recipe-list",
    templateUrl:"./recipelist.component.html"
})
export class RecipeListComponent{

    recipes: Recipe[] = [
        new Recipe("Palak Paneer","Cottage Cheese cooked in Spinach Gravy","https://shwetainthekitchen.com/wp-content/uploads/2014/03/DSC_1095.jpg"),
        new Recipe("Kaju Paneer","Cottage Cheese cooked with Cashew gravy","https://ohdishkitchen.in/wp-content/uploads/2020/05/Kaju-Paneer-masala.jpeg")
    ];

}
