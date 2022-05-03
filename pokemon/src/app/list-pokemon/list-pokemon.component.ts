import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemonType';
import { POKEMONS } from './../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  

  ngOnInit() {
    console.table(this.pokemonList)
  }  

}
