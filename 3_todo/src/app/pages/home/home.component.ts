import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listItem: object = {
    title: 'apprendre à coder',
    dueDate: "15/02/2023",
    completed: false,
    favourite: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
