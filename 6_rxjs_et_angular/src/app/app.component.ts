import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  private subscriptions: any
  
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
    this.subscriptions = interval(2000).subscribe(
      value => console.log("ma valeur est: ", value),
      error => console.error(error),
      () => console.log('terminé') 
    )
  }

  public stop():void {
    this.subscriptions.unsubscribe()
    console.log("la séquence est terminé!, bye!");
    
  }

}
