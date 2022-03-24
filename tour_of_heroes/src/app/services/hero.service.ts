import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { HEROES } from '../models/mock-heroes'
 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    
    const heroes = of(HEROES)
    return heroes

  }

}
