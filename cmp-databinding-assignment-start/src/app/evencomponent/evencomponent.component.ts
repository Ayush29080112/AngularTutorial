import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evencomponent',
  templateUrl: './evencomponent.component.html',
  styleUrls: ['./evencomponent.component.css']
})
export class EvencomponentComponent implements OnInit {

  @Input() num: number;

  constructor() { }

  ngOnInit(): void {
  }

}
