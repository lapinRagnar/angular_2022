import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PetInterface } from 'src/app/interfaces/pet.interface';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: PetInterface = <PetInterface>{}

  @Output() onAddFavorite: EventEmitter<PetInterface> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleCoeur(): void {
    console.log("clique sur favorite");
    this.onAddFavorite.emit()
  }

}
