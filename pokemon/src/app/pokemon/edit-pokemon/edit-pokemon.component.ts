import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemonType';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'))

    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon)      
    } else
    {
      this.pokemon = undefined
    }

  }

}
