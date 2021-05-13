import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
    selector:"app-shopping-list-edit",
    templateUrl:"./shoppinglistedit.component.html"
})
export class ShoppingListEdit{

    @ViewChild('ingredientName',{static:true}) ingredientName:ElementRef<HTMLInputElement>;
    @ViewChild('ingredientAmount',{static:true}) ingredientAmount:ElementRef<HTMLInputElement>;

    constructor(private shoppingService:ShoppingService){}
    ingred: Ingredient;
    onAddItem(){

        this.ingred= {name:this.ingredientName.nativeElement.value,amount:this.ingredientAmount.nativeElement.valueAsNumber}
        this.shoppingService.addIngredients(this.ingred)

    }
}