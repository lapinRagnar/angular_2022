import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';

import { PetsComponent } from './components/pets/pets.component';

const routes: Routes = [
  { path: '', component: PetsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'ajouter-pet', component: AddPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
