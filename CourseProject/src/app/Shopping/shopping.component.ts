import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Component({
    selector: "app-shopping",
    templateUrl:"./shopping.component.html"
})
export class ShoppingComponent implements OnInit{

    ingredients:Ingredient[]

   constructor(private shoppingService:ShoppingService){}
    ngOnInit(): void {
        this.ingredients =  this.shoppingService.getIngredients();
    }

}