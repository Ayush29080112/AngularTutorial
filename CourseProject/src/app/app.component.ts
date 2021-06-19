import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/auth/auth.service';
import { AutoLogin } from './auth/store/auth.action';
import { RecipeService } from './Recipe/recipe.service';
import { AppState } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService, private store:Store<AppState>){}
  ngOnInit() {
    this.store.dispatch(new AutoLogin());
  }
  
}
