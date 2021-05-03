import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddcomponent',
  templateUrl: './oddcomponent.component.html',
  styleUrls: ['./oddcomponent.component.css']
})
export class OddcomponentComponent implements OnInit {

  @Input() num: number;
  constructor() { }

  ngOnInit(): void {
  }

}
