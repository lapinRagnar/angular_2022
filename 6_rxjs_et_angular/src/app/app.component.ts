import { Component, OnInit } from '@angular/core';

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
  }

}
