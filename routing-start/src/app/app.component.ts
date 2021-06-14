import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn : boolean
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.loggedIn = this.authService.loggedIn;
    this.authService.loginEmitter.subscribe((login)=>{
      this.loggedIn = login;
    } )
  }

  onLogout(){
    this.authService.logOut()
  }
  onLogin(){
    this.authService.logIn()
  }
  

}
