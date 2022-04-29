import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMsg = ""

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "le prenom est requis!"
    } else
    if (this.password.trim().length === 0) {
      this.errorMsg = "le mot de passe est requis!"
    } else 
    {
      this.errorMsg = ""
    }
  }

}
