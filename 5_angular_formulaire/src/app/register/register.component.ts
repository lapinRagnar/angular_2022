import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm = new FormGroup({}) 

  public user: User = new User();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.registerForm = new FormGroup({
      
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(false)
    // })

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      sendCatalog: false
    })

  }

  public saveData() {
    console.log('ca marche');
    console.log(this.registerForm);
    console.log('nos valeurs', JSON.stringify(this.registerForm.value));
  }

  public fillFormData():void {
    this.registerForm.setValue({
      firstName: 'john',
      lastName: 'doe be',
      email: 'john@free.fr',
      sendCatalog: true
    })
  }

}
