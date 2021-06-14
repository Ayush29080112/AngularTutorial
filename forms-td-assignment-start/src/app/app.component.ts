import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  default ='Advanced'
  @ViewChild('f') form: NgForm;

  subscriptions = [{value:'Basic', display:'Basic'},{value:'Advanced', display:'Advanced'},{value:'Pro', display:'Pro'}]

  onSubmit(){
    console.log(this.form);
  }
}
