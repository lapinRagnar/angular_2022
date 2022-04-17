import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  breed: string = ''
  url: string = ''
  description: string = ''
  favorite: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

}
