import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username=''

  onClickUserNameReset(){
    if (this.username == '') {
      
    } else {
      this.username=''
    }
  }
}
