import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';

import { FakeData } from 'src/app/fake-data/fake-data';
import { PetInterface } from 'src/app/interfaces/pet.interface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  // pets: PetInterface[] = FakeData
  pets: PetInterface[] = []

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets)
  }

}
