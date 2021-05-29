import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer =''
  @ViewChild('f') form:NgForm
  genders= ['male','female']


  suggestUserName() {
    const suggestedName = 'Superuser';

    this.form.form.patchValue({'userDetails':{
      'username':suggestedName}});
  }

  onSubmit(){
    console.log(this.form)
  }
}
