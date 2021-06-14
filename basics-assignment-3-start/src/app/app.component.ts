import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph:boolean = false;
  clickEvent = [];
  i = 0 ;
  onButtonClick(){
    this.i = this.i+1;
    this.clickEvent.push(this.i);
    this.displayParagraph = !this.displayParagraph;
  }

  getBackGroundColor(){
    return this.i > 4? 'blue' :'white'
  }

  applyClass(){
    return this.i > 4? true:false
  }
}
