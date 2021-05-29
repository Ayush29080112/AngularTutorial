import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingService } from "../shopping.service";

@Component({
    selector:"app-shopping-list-edit",
    templateUrl:"./shoppinglistedit.component.html",
    styleUrls:["./shoppinglistedit.component.css"]
})
export class ShoppingListEdit implements OnInit, OnDestroy{

    subscription :Subscription
    editmode = false;
    editedItemIndex:number
    ingredToEdit :Ingredient
    @ViewChild('frm',{static:false}) form :NgForm;

    constructor(private shoppingService:ShoppingService){}
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
    ngOnInit(): void {
       this.subscription= this.shoppingService.startedEditing.subscribe(
           (index:number) =>{
                this.editmode = true;
                this.editedItemIndex = index
                this.ingredToEdit= this.shoppingService.getIngredients()[index];
                this.form.setValue({
                    name:this.ingredToEdit.name,
                    amount: this.ingredToEdit.amount
                })
           }
       )
    }
    ingred: Ingredient;
    onAddItem(frm:NgForm){
        const fromValue = frm.value;
        this.ingred= {name:fromValue.name,amount:fromValue.amount}
        if(!this.editmode){
            this.shoppingService.addIngredients(this.ingred)
        }else{
            this.shoppingService.editIngredient(this.editedItemIndex,this.ingred)
        }

        this.form.reset()
        this.editmode = false;

    }

    onClear(){
        this.form.reset()
        this.editmode=false
    }

    onDelete(){
        this.editmode = false;
        this.shoppingService.deleteIngredients(this.editedItemIndex)
        this.form.reset()
    }
}