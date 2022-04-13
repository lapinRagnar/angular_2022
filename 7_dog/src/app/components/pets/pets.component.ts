import { Component, OnInit } from '@angular/core';

import { FakeData } from 'src/app/fake-data/fake-data';
import { PetInterface } from 'src/app/interfaces/pet.interface';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: PetInterface[] = FakeData

  constructor() { }

  ngOnInit(): void {
  }

}
