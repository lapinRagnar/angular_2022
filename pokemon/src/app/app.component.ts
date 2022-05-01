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
  @Input() valeur: any

  ngOnInit() {
    console.table(this.pokemonList)
  }

  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value
    console.log(`tu as selectionné ${this.pokemonList[index].name} `)
    this.valeur =  this.pokemonList[index].name
  }

}
