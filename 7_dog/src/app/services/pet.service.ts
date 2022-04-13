import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PetInterface } from 'src/app/interfaces/pet.interface';
import { FakeData } from 'src/app/fake-data/fake-data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  // private url = "https://6256ef9a6ea7037005426160.mockapi.io/pets"
  private url = "http://localhost:9000/pets"

  constructor(private http: HttpClient) { }

  getPets(): Observable<PetInterface[]> {
    // const pets = of(FakeData)
    // return pets
    return this.http.get<PetInterface[]>(this.url)
  }

  updatePetFavorite(pet: PetInterface): Observable<PetInterface> {
    const updateUrl = `${this.url}/${pet.id}`
    console.log(updateUrl);
    
    return this.http.put<PetInterface>(updateUrl, pet, httpOptions)
  }

  deletePet(pet: PetInterface): Observable<PetInterface> {
    const updateUrl = `${this.url}/${pet.id}`
    return this.http.delete<PetInterface>(updateUrl)
  }

}
