import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  NgForm, 
  ValidatorFn, 
  Validators,
  FormArray
} from '@angular/forms';
import { debounceTime } from 'rxjs';



// validateur personalisée avec parametre
function ratingRangeValidator(min: number, max: number): ValidatorFn {
  
  return (c: AbstractControl): { [key: string]: boolean} | null => {

    if ( !!c && isNaN(c.value) || c.value < min || c.value > max  ) {                // !!c est equivalent de c!==null et undefined
      return { 'rangeError': true }
    }

    return null
  }

}

// confirmer l'email
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  
  const emailControl = c.get('email')
  const emailConfirmControl = c.get('confirmEmail')

  if (emailControl!.value || emailConfirmControl!.value) {
    return null
  }

  if (emailControl!.value === emailConfirmControl!.value) {
    return null
  } else
  {
    return { 'match': true}
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public registerForm = new FormGroup({}) 

  public user: User = new User();

  public errorMsg: string = ''

  private validationErrorsMessages: {[key: string]: {}} = {
    required: "entrez l'email",
    email: 'email invalide!'
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],

      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { Validators: emailMatcher} ),

      phone: '',
      rating: [null, ratingRangeValidator(1,5)],
      notification: 'email',
      sendCatalog: true,

      addresses: this.fb.array([this.createAddressGroup()])

    })

    this
      .registerForm.get('notification')?.valueChanges
      .subscribe(value => this.setNotificationSetting(value))

    const emailControl = this.registerForm.get('emailGroup.email')
  
    emailControl!.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(val => {
      console.log(val)      
      this.setMessage(emailControl!)
    })

  }

  public get addressList(): FormArray {
    // return <FormArray>this.registerForm.get('addresses')  // estl'equivalent de ci dessous
    return this.registerForm.get('addresses') as FormArray
  }

  public addAddress(): void {
    console.log('marche');    
    this.addressList.push(this.createAddressGroup())
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

  private createAddressGroup(): FormGroup {
    return this.fb.group({

      addressType: ['home'],
      street1: [''],
      street2: [''],
      city: [''],
      state: [''],
      zip: [''],

    })
  }

  private setMessage(val: AbstractControl): void {
    
    if ((val.touched || val.dirty) && val.errors) {
      
      console.log(Object.keys(val.errors));
      this.errorMsg = Object.keys(val.errors).map(key => {
        console.log('clé: ',key)
        this.validationErrorsMessages[key]
      }).join(' ')

      console.log(' clé message erreur : ', this.errorMsg);
      
    }

  }


}
