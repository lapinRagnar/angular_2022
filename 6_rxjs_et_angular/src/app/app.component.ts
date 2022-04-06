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

  }

  
  double = (source: Observable<number>) => {
    new Observable<number>((subscriber) => {
      const subscription = source.subscribe({
        next: (value) => subscriber.next(2 * value),
        error: (err) => subscriber.error(err),
        complete: () => subscriber.complete()
      })

      return () => {
        subscription.unsubscribe()
      }

    })
  }
  
  monObser = of(1, 2, 3).pipe(double).subscribe(console.log)

}
