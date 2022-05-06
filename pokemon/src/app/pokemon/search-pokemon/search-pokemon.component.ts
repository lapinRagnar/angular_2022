import { PokemonService } from 'src/app/pokemon/pokemon.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/pokemon/pokemonType';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  // {...'ab'......'abz'.....'ab'.....'abc'....}
  searchTerms = new Subject<string>()

  // {...pokemonList('ab')....pokemonList('abz').........}
  pokemons$: Observable<Pokemon[]>

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link)
  }

}
