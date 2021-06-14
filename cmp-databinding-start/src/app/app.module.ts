import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerFormComponentComponent } from './server-form-component/server-form-component.component';
import { ServerElementComponentComponent } from './server-element-component/server-element-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerFormComponentComponent,
    ServerElementComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
