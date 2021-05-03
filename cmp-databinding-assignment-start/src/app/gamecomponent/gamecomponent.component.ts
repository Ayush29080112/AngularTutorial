import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import EventEmitter = require('node:events');

@Component({
  selector: 'app-gamecomponent',
  templateUrl: './gamecomponent.component.html',
  styleUrls: ['./gamecomponent.component.css']
})
export class GamecomponentComponent implements OnInit {

  interval;
  i=0;
  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.interval= setInterval(()=>{this.intervalFired.emit(++this.i)},1000)
  } 

  onPauseGame(){
    clearInterval(this.interval)
  }

}
