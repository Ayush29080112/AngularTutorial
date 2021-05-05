import { Component, Input } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";

@Component({
    selector:"app-shopping-list",
    templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList{

    @Input() ingredients:Ingredient[];

   

}