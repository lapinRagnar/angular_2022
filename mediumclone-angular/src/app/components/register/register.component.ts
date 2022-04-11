import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { select, Store } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { registerAction } from "src/app/auth/store/actions";
import { isSubmittingSelector } from './../../auth/store/selectors';
import { AuthService } from './../../auth/services/auth.service';           // ceci on va remplacer par register effect prochainement

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    form = new FormGroup({})
    isSubmitting$!: Observable<boolean> 

    constructor(
        private fb: FormBuilder, 
        private store: Store,
        private authService: AuthService // ceci on va remplacer par register effect prochainement
    ) {

    }

    ngOnInit():void {
        this.initializeForm()
        this.initializeValues()

    }

    initializeValues(): void {

        // this.isSubmitting$ = this.store.select(isSubmittingSelector) est l'equivalent de 
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))          // nouveau syntax rxjs
        console.log("is submitting: ", this.isSubmitting$);
        
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
        this.store.dispatch(registerAction(this.form.value))

        // ceci on va remplacer par register effect prochainement
        this.authService
            .register(this.form.value)
            .subscribe((currentUser: CurrentUserInterface) => {
                console.log("current user : ", currentUser);
                
            })
        
    }
}