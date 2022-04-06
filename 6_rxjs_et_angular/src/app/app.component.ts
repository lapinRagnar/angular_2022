import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, of, from } from 'rxjs';
import { map, tap, take, filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  private subscriptions: Subscription = new Subscription()
  
  ngOnInit(): void {


    from([1, 2, 0, 3,undefined, 15, 16, 17, 18])
      .pipe(
        
       filter(element => element !== undefined && element !== 0)

      )
      .subscribe(
      (item: number | undefined) => console.log(`ma valeur ${item}`),
      (err: unknown) => console.error(err),
      () => console.log('terminé')
    )

  }

  ngOnDestroy(): void {

  } 


}
