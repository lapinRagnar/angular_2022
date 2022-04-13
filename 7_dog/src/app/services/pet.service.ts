import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PetInterface } from 'src/app/interfaces/pet.interface';
import { FakeData } from 'src/app/fake-data/fake-data';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = "https://6256ef9a6ea7037005426160.mockapi.io/pets"

  constructor(private http: HttpClient) { }

  getPets(): Observable<PetInterface[]> {
    // const pets = of(FakeData)
    // return pets
    return this.http.get<PetInterface[]>(this.url)
  }

}
