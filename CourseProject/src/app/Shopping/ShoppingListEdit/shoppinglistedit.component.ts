import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { AppState } from "src/app/store/app.store";

import { AddIngredient, AddIngredients, DeleteIngredient, StopEdit, Updatengredients } from "../store/shoppingList.action";

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

    constructor( private store:Store<AppState>){}
    ngOnDestroy(): void {
        this.store.dispatch(new StopEdit());
        this.subscription.unsubscribe()
    }
    ngOnInit(): void {
       this.subscription= this.store.select('shoppingList').subscribe((state)=>{
            if(state.editedIndex>-1){
                this.editmode = true,
                this.ingredToEdit = state.edittedIngredient
                this.editedItemIndex = state.editedIndex;
                this.form.setValue({
                    name:this.ingredToEdit.name,
                    amount: this.ingredToEdit.amount
                })
            }else{
                this.editmode= false;
            }
            
        }) 
       
    }
    ingred: Ingredient;
    onAddItem(frm:NgForm){
        const fromValue = frm.value;
        this.ingred= {name:fromValue.name,amount:fromValue.amount}
        if(!this.editmode){
            this.store.dispatch(new AddIngredient(this.ingred))
            // this.shoppingService.addIngredients(this.ingred)
        }else{
            this.store.dispatch(new Updatengredients({ingrdient:this.ingred}))
            // this.shoppingService.editIngredient(this.editedItemIndex,this.ingred)
        }

        this.form.reset()
        this.editmode = false;

    }

    onClear(){
        this.form.reset();
        this.store.dispatch(new StopEdit());
        this.editmode=false;
    }

    onDelete(){
        this.editmode = false;
        this.store.dispatch(new DeleteIngredient());
        // this.shoppingService.deleteIngredients(this.editedItemIndex)
        this.form.reset()
    }
}