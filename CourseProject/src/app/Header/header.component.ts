import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    
    @Output() clickEvent= new EventEmitter<string>();
    onRecipesClick(){
        this.clickEvent.emit('Recipes');
    }

    onShoppingClick(){
        this.clickEvent.emit('Shopping');
    }
}