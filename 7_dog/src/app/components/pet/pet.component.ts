import { PetInterface } from './../../interfaces/pet.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: PetInterface = <PetInterface>{}

  constructor() { }

  ngOnInit(): void {
  }

}
