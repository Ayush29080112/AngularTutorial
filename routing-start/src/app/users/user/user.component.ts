import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string};
  routeSubscripe: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.routeSubscripe.unsubscribe()
  }

  ngOnInit() {
    this.user= {
      id:this.activeRoute.snapshot.params['id'],
      name:this.activeRoute.snapshot.params['name']
    }

    this.routeSubscripe =this.activeRoute.params.subscribe((params:Params)=>{
      this.user.id = params['id'];
      this.user.name = params['name']
    })
  }

}