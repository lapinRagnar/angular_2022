import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  signIn() {
    console.log("valeur du formulaire", this.loginForm.value);
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
  }

  createAccount() {
    console.log("ca marche!")
    this.authService.signUp(this.loginForm.value.email, this.loginForm.value.password)
  }

  logOut() {
    this.authService.logOut()
  }

}
