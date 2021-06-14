import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DropdownDirective } from "../Shared/dropdown.directive";
import { RecipeClickComponentComponent } from "./recipe-click-component/recipe-click-component.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipeComponent } from "./recipe.component";
import { RecipeDetailComponent } from "./RecipeDetail/recipedetail.component";
import { RecipeItemComponent } from "./RecipeList/RecipeItem/recipeitem.component";
import { RecipeListComponent } from "./RecipeList/recipelist.component";

@NgModule({
   imports:[RouterModule,CommonModule,ReactiveFormsModule, RecipeRoutingModule,FormsModule],
   declarations:[
   DropdownDirective,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeClickComponentComponent,
    RecipeEditComponent,
    RecipeComponent
   ],
   exports:[DropdownDirective],
   providers:[] 
})
export class RecipeModule{

}