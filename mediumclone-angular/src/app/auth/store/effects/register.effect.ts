import { PersistanceService } from './../../services/persistance.service';
import { Injectable } from "@angular/core";
import { of, catchError } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from "@ngrx/effects"
import { HttpErrorResponse } from '@angular/common/http';

import { registerAction, registerFailureAction } from "../actions/register.actions";
import { registerSuccessAction } from './../actions/register.actions';
import { AuthService } from './../../services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';

@Injectable()
export class RegisterEffect {

    register$ = createEffect(() => 
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({request}) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {

                        // window.localStorage.setItem("accessToken", currentUser.token)

                        this.persistanceService.set('accessToken', currentUser.token)

                        return registerSuccessAction({currentUser})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(registerFailureAction({errors: errorResponse.error.errors}))
                    })
                    // catchError((errors: BackendErrorsInterface) => {
                    //     return of(registerFailureAction({errors}))
                    // })
                )
            } )
        )
    
    )

    constructor(
        private actions$: Actions, 
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) {}
}