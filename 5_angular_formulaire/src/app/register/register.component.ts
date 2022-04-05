import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public saveData(registerForm: NgForm) {
    console.log('ca marche');
    console.log(registerForm.form);
    console.log('nos valeurs', JSON.stringify(registerForm.value));
    
    
    
  }

}
