import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, of, from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription = new Subscription()
  
  ngOnInit(): void {

    let foisDeux = (nombre: number): number => {
      return nombre * 2
    }

    from([1, 2, 3, 15, 16, 17, 18])
      .pipe(
        map(foisDeux)  
      )
      .subscribe(
      (item: number) => console.log(`ma valeur ${item}`),
      (err: unknown) => console.error(err),
      () => console.log('terminé')
    )

  }

  ngOnDestroy(): void {

  }

  


}
