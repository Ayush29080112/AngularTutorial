import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';
import { OddcomponentComponent } from './oddcomponent/oddcomponent.component';
import { EvencomponentComponent } from './evencomponent/evencomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecomponentComponent,
    OddcomponentComponent,
    EvencomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
