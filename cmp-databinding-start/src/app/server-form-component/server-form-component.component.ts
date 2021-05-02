import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-form-component',
  templateUrl: './server-form-component.component.html',
  styleUrls: ['./server-form-component.component.css']
})
export class ServerFormComponentComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,content:string}>();
  @Output() bluprintCreated= new EventEmitter<{serverName:string,content:string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContent', {static:true}) serverContent: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName : serverNameInput.value,
        content:this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluprintCreated.emit({
      serverName:serverNameInput.value,
      content:this.serverContent.nativeElement.value
  });
  }
}
