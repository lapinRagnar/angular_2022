import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from 'src/app/pokemon/pokemonType';
import { PokemonService } from 'src/app/pokemon/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[]
  pokemon: Pokemon|undefined

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService  
  ) { }

  ngOnInit(): void {    
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemon = this.pokemonService.getPokemonById(pokemonId)
  }

  goToPokemonList() {
    this.router.navigate(['/'])
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate([`/edit/pokemon`, pokemon.id])
  }

}
