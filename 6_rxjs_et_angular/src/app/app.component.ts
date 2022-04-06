import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, of, from, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription = new Subscription()
  
  ngOnInit(): void {


    from([1, 2, 3, 15, 16, 17, 18])
      .pipe(
        
        tap(x => console.log('valeur originale sans modif : ',x)),
        map((elem: number) => {
          if (elem === 0) {
            throw new Error('le nombre est zero')
          }
          return 2 * elem
        } ),

        map (item => item - 10 )

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
