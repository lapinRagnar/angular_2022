import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  private subscriptions: Subscription[] = []
  
  ngOnInit(): void {

    // const observer = {
    //   next: (item: unknown) => console.log(`une boite arrive ${item} `),
    //   error: (err: unknown) => console.log(`oups, il y a une erreur ${err} `),
    //   complete: () => console.log('terminé, notre sequence est terminée les mecs! ')
    // }

    // const stream = new Observable(myObserver => {
    //   myObserver.next('boite 1')
    //   myObserver.next('boite 2')
    //   myObserver.next('boite 3')
    //   myObserver.complete()
    // })

    // const subscription = stream.subscribe(
    //   item => console.log(`une boite arrive ${item}`),
    //   err => console.log(`oups, il y a une erreur ${err}`),
    //   () => console.log('mission accomplie!')            
    // )

  }

  public start(): void {

    this.subscriptions.push(interval(2000).subscribe(
      value => console.log("observable 1 --- ma valeur est: ", value),
      error => console.error(error),
      () => console.log('observable 1 --- terminé') 
    ))

    this.subscriptions.push(interval(4000).subscribe(
      value => console.log("observable 2 --- ma valeur est: ", value),
      error => console.error(error),
      () => console.log('observable 2 --- terminé') 
    ))
  }

  public stop():void {
    this.subscriptions.forEach(elem => {
      elem.unsubscribe()
    })
    
  }

}
