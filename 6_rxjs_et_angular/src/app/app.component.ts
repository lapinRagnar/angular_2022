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



}
