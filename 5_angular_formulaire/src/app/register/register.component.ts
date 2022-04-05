import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


function ratingRangeValidator(c: AbstractControl): { [key: string]: boolean} | null {

  if ( !!c && isNaN(c.value) || c.value < 1 || c.value > 5  ) {                // !!c est equivalent de c!==null et undefined
    return { 'rangeError': true }
  }

  return null
}

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
      phone: '',
      rating: [null, ratingRangeValidator],
      notification: 'email',
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

  public setNotificationSetting(method: string): void {

    console.log("ca maaaaaaaaarche!");
    
    const phoneControl = this.registerForm.get('phone')

    if (method === 'text') {
      phoneControl?.setValidators(Validators.required)
    } else 
    {
      phoneControl?.clearValidators()
    }

    phoneControl?.updateValueAndValidity()

  }


}
