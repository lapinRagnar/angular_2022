import { HttpClient } from '@angular/common/http';
import { HEROES } from './../models/mock-heroes';
import { Observable, of, catchError, tap } from 'rxjs';
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
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl).pipe(
  //     catchError(this.handleError<Hero[]>('getHeroes', []))
  //   )
  // }


  /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Hero[]>('getHeroes', []))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
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
