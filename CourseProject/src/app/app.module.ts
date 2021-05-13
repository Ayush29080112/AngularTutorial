import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeComponent } from './Recipe/recipe.component';
import { RecipeService } from './Recipe/recipe.service';
import { RecipeDetailComponent } from './Recipe/RecipeDetail/recipedetail.component';
import { RecipeItemComponent } from './Recipe/RecipeList/RecipeItem/recipeitem.component';
import { RecipeListComponent } from './Recipe/RecipeList/recipelist.component';
import { DropdownDirective } from './Shared/dropdown.directive';
import { ShoppingComponent } from './Shopping/shopping.component';
import { ShoppingService } from './Shopping/shopping.service';
import { ShoppingList } from './Shopping/ShoppingList/shoppinlist.component';
import { ShoppingListEdit } from './Shopping/ShoppingListEdit/shoppinglistedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ShoppingComponent,
    RecipeComponent,
    ShoppingList,
    ShoppingListEdit,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
