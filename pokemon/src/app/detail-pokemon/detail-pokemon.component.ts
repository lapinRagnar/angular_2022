import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/pokemonType';
import { POKEMONS } from 'src/app/mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[]
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.pokemonList = POKEMONS
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id == pokemonId)
    console.table(this.pokemon)
  }


}
