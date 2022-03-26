import { HEROES } from './../models/mock-heroes';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { MessageService } from './message.service'
 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes les baby eh!')
    return heroes

  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!
    this.messageService.add(`HeroService fetched hero id=${id}  `)
    return of(hero)
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
