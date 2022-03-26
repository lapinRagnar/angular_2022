import { HttpClient } from '@angular/common/http';
import { HEROES } from './../models/mock-heroes';
import { Observable, of, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { MessageService } from './message.service'
 
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  /** GET heroes from local data mock */
  // getHeroes(): Observable<Hero[]> {
    
  //   const heroes = of(HEROES)
  //   this.messageService.add('HeroService: fetched heroes les baby eh!')
  //   return heroes

  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!
    this.messageService.add(`HeroService fetched hero id=${id}  `)
    return of(hero)
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }


  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}
