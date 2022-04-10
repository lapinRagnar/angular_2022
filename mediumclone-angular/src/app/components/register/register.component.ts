import { Component, OnInit } from "@angular/core";
import { 
    FormBuilder, 
    FormGroup, 
    Validators } 
    
    from "@angular/forms";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form = new FormGroup({})

    constructor(private fb: FormBuilder) {

    }

    ngOnInit():void {
        this.initializeForm()
    }

    initializeForm(): void {
        console.log('marche');
        this.form = this.fb.group({
            username: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        })
        
    }

    onSubmit(): void {
        console.log('submit: ', this.form.value);
        
    }
}