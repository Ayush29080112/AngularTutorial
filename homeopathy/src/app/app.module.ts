import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouteModule } from './router.module';
import { TreatmentsComponent } from './treatments/treatments.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import {CarouselModule} from 'ngx-bootstrap/carousel'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreatmentsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
