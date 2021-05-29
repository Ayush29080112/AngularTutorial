import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubs: Subscription

  constructor() { }
  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe()
  }

  ngOnInit() {
    // this.firstObsSubs= interval(1000).subscribe(count =>{
    //   console.log(count)
    // })

    const observerCust = Observable.create(observer=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if (count >3){
          observer.error(new Error("Count is greater than 3"))
        }
        count++;
      },1000)
    })
    this.firstObsSubs = observerCust.subscribe((value)=> console.log(value),(error)=>{console.log('Error');
    alert("An error occured")})

  }

}
