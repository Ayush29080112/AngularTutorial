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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RecipeResolverService } from './Recipe/recipe-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './auth/auth/auth-interceptor.service';
import { AuthGuard } from './auth/auth/auth.guard';
import { AlertComponent } from './Shared/alert/alert.component';
import { PlaceHolderDirective } from './Shared/placeholder/placeholder.directive';


const approutes: Routes =[
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'shopping' , component: ShoppingComponent},
  {path:'recipes', component: RecipeComponent,canActivate:[AuthGuard], children:[
    {path:'', component:RecipeClickComponentComponent},
    {path: 'new', component:RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent, resolve:[RecipeResolverService]},
    {path: ':id/edit', component:RecipeEditComponent, resolve:[RecipeResolverService]}
    
  ]},
  {path: 'auth',component:AuthComponent}
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
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecipeService,ShoppingService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
