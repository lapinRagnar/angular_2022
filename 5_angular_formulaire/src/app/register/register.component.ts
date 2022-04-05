import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm = new FormGroup({}) 

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(false)
    })

  }

  public saveData() {
    console.log('ca marche');
    console.log(this.registerForm);
    console.log('nos valeurs', JSON.stringify(this.registerForm.value));
    
    
    
  }

}
