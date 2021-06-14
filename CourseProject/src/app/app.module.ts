import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './auth/auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { RecipeService } from './Recipe/recipe.service';
import { RecipeModule } from './Recipe/recipe.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.store';


const approutes: Routes =[
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'shopping',loadChildren: ()=> import('./Shopping/shopping.module').then((m)=>m.ShoppingModule)}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    RecipeModule
  ],
  providers: [RecipeService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
