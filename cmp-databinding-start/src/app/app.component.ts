import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server", name:"Test", content:"This is a test server"}];
  

  onServerCreated(serverData: {serverName:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.content
    });
  }

  onBluePrintCreated(blueprint: {serverName:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.serverName,
      content: blueprint.content
    });
  }

  onChangeFirstELement(){
    this.serverElements[0].name ="Changed!!"
  }

  onDestroy(){
    this.serverElements.splice(0)
  }
}
