import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemonType';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon
  types: string[]
  isAddForm: boolean

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList()
    this.isAddForm = this.router.url.includes('add')
    console.log('je suis la aaa',this.pokemon.types);
    
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type)
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked
    
    if (isChecked) {
      this.pokemon.types.push(type)
    } else {
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1)
    }
  }

  isTypesValid(type: string): boolean {    

    
    
    if (this.hasType(type) && this.pokemon.types.length == 1 ) {
      console.log("faux");
      
      return false
    }

    if (!this.hasType(type) && this.pokemon.types.length > 2 ) {
      console.log("faux 2");
      
      return false
    } 
    console.log("vrai");
    
    return true
  }

  onSubmit() {

    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon).subscribe(
        (pokemon) => this.router.navigate(['/pokemon', pokemon.id])
      )
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(
        (pokemon) => this.router.navigate(['/pokemon', pokemon.id])
      )
    }

    
  }

}
