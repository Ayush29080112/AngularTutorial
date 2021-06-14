import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private routes: Router,
    private activeRoute:ActivatedRoute) { }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowEdit){
      return true
    } else if((this.server.status != this.serverStatus || this.server.name!= this.serverName)&& !this.changesSaved){
      return confirm("Do you want to exit without changing the state?")
    }else{
      return true
    }
  }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe((queryparam)=>{
      this.allowEdit = queryparam['allowEdit'] === '1'
    })
    this.activeRoute.params.subscribe((params)=>{
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.routes.navigate(['../'],{relativeTo:this.activeRoute})
  }

}
