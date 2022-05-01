import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemonType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList)
    this.selectPokemon(this.pokemonList[0])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`vous avez selectionner ${pokemon.name} `)
  }

}
