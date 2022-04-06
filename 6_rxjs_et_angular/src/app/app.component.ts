import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription = new Subscription()
  
  ngOnInit(): void {



  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  public start(): void {

    this.subscriptions.add(interval(2000).subscribe(
      value => console.log("observable 1 --- ma valeur est: ", value),
      error => console.error(error),
      () => console.log('observable 1 --- terminé') 
    ))

    this.subscriptions.add(interval(4000).subscribe(
      value => console.log("observable 2 --- ma valeur est: ", value),
      error => console.error(error),
      () => console.log('observable 2 --- terminé') 
    ))
  }

  public stop():void {
    this.subscriptions.unsubscribe()
  }

}
