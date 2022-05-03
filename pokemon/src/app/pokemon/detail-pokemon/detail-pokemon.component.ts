import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from 'src/app/pokemon/pokemonType';
import { POKEMONS } from 'src/app/pokemon/mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[]
  pokemon: Pokemon|undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {    
    this.pokemonList = POKEMONS
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id == pokemonId)
    console.table(this.pokemon)
  }

  goToPokemonList() {
    this.router.navigate(['/'])
  }

}
