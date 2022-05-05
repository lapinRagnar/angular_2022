import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

import { Pokemon } from 'src/app/pokemon/pokemonType';

@Injectable()
export class PokemonService {

  apiPokemonUrl = 'http://localhost:3000/pokemon'
  constructor(
    private http: HttpClient
  ) {}

  searchPokemonList(term: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiPokemonUrl}/?name${term}`).pipe(
      tap(response => this.log(response) ),
      catchError(error => this.handleError(error, [] ))    
    )
  }

  getPokemonList():  Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiPokemonUrl).pipe(
      tap(response => this.log(response) ),
      catchError(error => this.handleError(error, [] ))  
    )
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`${this.apiPokemonUrl}/${pokemonId}`).pipe(
      tap(response => this.log(response) ),
      catchError(error => this.handleError(error, undefined ))    
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined|any> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }
    return this.http.put(`${this.apiPokemonUrl}/${pokemon.id}`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, undefined ))   
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }

    return this.http.post<Pokemon>(this.apiPokemonUrl, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, undefined ))   
    )
  }

  deletePokemonById(pokemonId: number): Observable<any> {
    return this.http.delete(`${this.apiPokemonUrl}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, undefined ))   
    )
  }

  private log(response: any) {
    console.table(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue)
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Elektric',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
