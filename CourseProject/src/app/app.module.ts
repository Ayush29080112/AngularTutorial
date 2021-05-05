import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeComponent } from './Recipe/recipe.component';
import { RecipeDetailComponent } from './Recipe/RecipeDetail/recipedetail.component';
import { RecipeItemComponent } from './Recipe/RecipeList/RecipeItem/recipeitem.component';
import { RecipeListComponent } from './Recipe/RecipeList/recipelist.component';
import { ShoppingComponent } from './Shopping/shopping.component';
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
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
