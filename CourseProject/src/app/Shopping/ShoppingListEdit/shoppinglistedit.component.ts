import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";

@Component({
    selector:"app-shopping-list-edit",
    templateUrl:"./shoppinglistedit.component.html"
})
export class ShoppingListEdit{

    @ViewChild('ingredientName',{static:true}) ingredientName:ElementRef<HTMLInputElement>;
    @ViewChild('ingredientAmount',{static:true}) ingredientAmount:ElementRef<HTMLInputElement>;

    @Output() ingredAdded = new EventEmitter<Ingredient>()

    ingred: Ingredient;
    onAddItem(){
        this.ingred= {name:this.ingredientName.nativeElement.value,amount:this.ingredientAmount.nativeElement.valueAsNumber}

        this.ingredAdded.emit(this.ingred);
    }
}