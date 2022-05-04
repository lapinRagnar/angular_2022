import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';

import { Pokemon } from 'src/app/pokemon/pokemonType';
import { POKEMONS } from 'src/app/pokemon/mock-pokemon-list';

@Injectable()
export class PokemonService {

  apiPokemonUrl = 'http://localhost:3000/pokemon'
  constructor(
    private http: HttpClient
  ) {}

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

  private log(response: Pokemon[]|Pokemon|undefined) {
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
