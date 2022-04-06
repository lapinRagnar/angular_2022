import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, of, from } from 'rxjs';

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

  // afficher 1 2 3 dans le console
  monObs = of(1, 2, 3).subscribe(console.log)
  
  // affiche 1 et 5
  monObs2 = from([1, 5]).subscribe(console.log)

  // affiche 5, 12, 15
  monObs3 = from([5, 12, 15]).subscribe(
    (item: number) => console.log(` mon nombre ${item} `),
    (err: unknown) => console.log(err),
    () => console.log("terminé")
  )

}
