import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/Shared/alert/alert.component';
import { PlaceHolderDirective } from 'src/app/Shared/placeholder/placeholder.directive';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode=true;
  isLoading = false;

  private closeSub : Subscription
  error:string = ''
  @ViewChild('authForm') form:NgForm;
  @ViewChild(PlaceHolderDirective)  alertHost:PlaceHolderDirective;
  constructor(private authService:AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe()
    }
  }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(){
    console.log(this.form);
    this.isLoading = true;
    if(!this.isLoginMode){
      this.authService.signUp(this.form.value.email,this.form.value.password).
      subscribe((response)=>{console.log(response), this.isLoading = false; this.router.navigate(['/auth'])},
      error=>{this.error = error;console.log(this.error);  this.showErrorAlert(error) ;this.isLoading=false})
    }else{
      this.authService.login(this.form.value.email,this.form.value.password).
      subscribe((response)=>{console.log(response), this.isLoading = false; this.router.navigate(['/recipes'])},
      error=>{this.error = error;console.log(this.error); this.showErrorAlert(error);this.isLoading=false})
    }
    this.form.reset()
  }

  onHandleError(){
    this.error = ''
  }


  private showErrorAlert(error:string){

    //const alertComp = new AlertComponent()
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory)
    componentRef.instance.message = error;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear()
    })
  }

}
