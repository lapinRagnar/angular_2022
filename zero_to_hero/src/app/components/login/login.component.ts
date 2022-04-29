import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMsg = ""

  constructor(
    private authService: AuthService,
    private router: Router  
  ) { }

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
      let res = this.authService.login(this.username, this.password)
      if (res === 200) {
        this.router.navigate(['home'])
      }
      if (res === 403) {
        this.errorMsg = "erreur, ca n'a pas marché!"
      }
    }
  }

}
