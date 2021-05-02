import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element-component',
  templateUrl: './server-element-component.component.html',
  styleUrls: ['./server-element-component.component.css']
})
export class ServerElementComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked , AfterViewChecked, OnDestroy {
  @Input() element: {type: String, name:String, content:String};

  @Input() name: string;

  @ViewChild('heading', {static:true}) heading:ElementRef;

  constructor() { 
    console.log("Constructor called")
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
    console.log("Heading Value" +this.heading.nativeElement.textContent)
  }

  ngOnChanges(Changes: SimpleChanges){
    console.log(Changes)
  }

  ngDoCheck(){
    console.log('ngDoCheckCalled')
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
    console.log("Heading Value" +this.heading.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log("ngAferContentChecked called")
  }


  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
    console.log("Heading Value" +this.heading.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log("Element Destroyed")
  }

}
