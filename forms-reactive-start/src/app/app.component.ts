import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userdata': new FormGroup({
        'userName' : new FormControl(null,[Validators.required,this.forbiddenUserName.bind(this)]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),  
      }),
      'gender' : new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }
  forbiddenUser= ['Ayush','Test']
  genders = ['male', 'female'];

  signupForm : FormGroup

  onSubmit(){
    console.log(this.signupForm)
  }

  onAddHobbie(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenUserName(formControl:FormControl ): {[s:string]:boolean} {
    if(this.forbiddenUser.indexOf(formControl.value)!=-1){
      return {'username is forbidden': true}
    }
    return null;
  }
}
