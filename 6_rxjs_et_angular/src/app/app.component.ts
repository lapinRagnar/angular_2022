import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  ngOnInit(): void {

    const observer = {
      next: (item: unknown) => console.log(`une boite arrive ${item} `),
      error: (err: unknown) => console.log(`oups, il y a une erreur ${err} `),
      complete: () => console.log('terminé, notre sequence est terminée les mecs! ')
    }

    const stream = new Observable(myObserver => {
      myObserver.next('boite 1')
      myObserver.next('boite 2')
      myObserver.next('boite 3')
      myObserver.complete()
    })

    const subscription = stream.subscribe(
      item => console.log(`une boite arrive ${item}`),
      err => console.log(`oups, il y a une erreur ${err}`),
      () => console.log('mission accomplie!')            
    )

  }

}
