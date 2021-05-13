import { Component } from '@angular/core';
import { RecipeService } from './Recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {

  clicked ='';

  onHeaderCLick(iconClicked:string){
    this.clicked=iconClicked;
  }
}
