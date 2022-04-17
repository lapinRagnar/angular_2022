import { Component, OnInit } from '@angular/core';

declare var windows: any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  formModal: any

  constructor() { }

  ngOnInit(): void {
    
    // this.formModal = new window.Bootstrap.Modal
    // this.formModal = new window.bootstrap.Modal(document.getElementById('myModal'))

  }


  openFormModal() {

  }

}
