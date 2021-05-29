import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required,this.forbiddenNameValidator.bind(this)]),
      'mail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailValidator.bind(this)),
      'status': new FormControl('Stable')
    })
  }

  onFormSubmit(){
    console.log(this.projectForm)
  }

  forbiddenName = 'test'
  projectForm :FormGroup;
  forbiddenemail = 'test@test.com'
  
  forbiddenNameValidator(contro:FormControl):{[s:string]:boolean}{

    if(contro.value === this.forbiddenName){
      return {'InvalidUserName':true}
    }else{
      return null
    }
  }

  forbiddenEmailValidator(control:FormControl) : Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() =>  {  
        if(control.value === this.forbiddenemail){
          resolve( {'InvalidEmail':true})
        }else{
          resolve (null)
      }},1800);
    })
    return promise;
  }


}
