import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PetInterface } from 'src/app/interfaces/pet.interface';
import { FakeData } from 'src/app/fake-data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  getPets(): Observable<PetInterface[]> {
    const pets = of(FakeData)
    return pets
  }
  
}
