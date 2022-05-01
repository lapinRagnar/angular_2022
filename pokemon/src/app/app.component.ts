import { Component, Input, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemonType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  pokemonList: Pokemon[] = POKEMONS;
  
  pokemonSelected: Pokemon|undefined


  ngOnInit() {
    console.table(this.pokemonList)
  }

  selectPokemon(pokemonId: string) {
    
    const pokemon: Pokemon|undefined = this.pokemonList.find( pokemon => pokemon.id == +pokemonId )
    
    if (pokemon) {
      console.log(`tu as selectionné le pokemon ${pokemon?.name} `)
      this.pokemonSelected = pokemon
    } else {
      console.log(`ce pokemon n'existe pas `)
      this.pokemonSelected = pokemon
    }
  }

}
