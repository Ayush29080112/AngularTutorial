import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit {

  public itemsPerSlide = 3;
public singleSlideOffset = false;
public noWrap = false;
public cycleInterval = 3000;

  public images =[{src:'assets/image/treat1.jpeg',desc:'Slide1'},{src:'assets/image/treat2.jpeg',desc:'Slide2'},{src:'assets/image/web20.jpeg',desc:'Slide3'}]


  ngOnInit(): void {
  }

}
