import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
    selector:"app-reciepe-item",
    templateUrl:"./recipeitem.component.html"
})
export class RecipeItemComponent implements OnInit{

    @Input() recipe:Recipe;
    @Input() position:number;

    constructor(private recipeService:RecipeService, private route: Router, private activeRoute: ActivatedRoute) {}
    ngOnInit(){

    }

    onItemClick(){
        this.route.navigate([this.position],{relativeTo:this.activeRoute})
        // this.recipeService.loadRecipeDetailsEvent.emit(this.recipe);
    }
}