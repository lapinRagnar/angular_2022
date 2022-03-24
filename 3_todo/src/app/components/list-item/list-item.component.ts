import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

   
  listItem = {
    title: 'apprendre à coder',
    dueDate: "15/02/2023",
    completed: false,
    favourite: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite() {
    this.listItem.favourite = !this.listItem.favourite
  }

}
