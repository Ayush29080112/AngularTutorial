import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { RecipeClickComponentComponent } from './Recipe/recipe-click-component/recipe-click-component.component';
import { RecipeEditComponent } from './Recipe/recipe-edit/recipe-edit.component';


const approutes: Routes =[
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'shopping' , component: ShoppingComponent},
  {path:'recipes', component: RecipeComponent, children:[
    {path:'', component:RecipeClickComponentComponent},
    {path: 'new', component:RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent},
    {path: ':id/edit', component:RecipeEditComponent}

  ]}
]

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
    DropdownDirective,
    RecipeClickComponentComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    ReactiveFormsModule
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
