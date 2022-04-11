import { Injectable } from "@angular/core";
import { of, catchError } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { createEffect, Actions, ofType } from "@ngrx/effects"

import { registerAction, registerFailureAction } from "../actions/register.actions";
import { registerSuccessAction } from './../actions/register.actions';
import { AuthService } from './../../services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';

@Injectable()
export class RegisterEffect {

    register$ = createEffect(() => 
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({request}) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({currentUser})
                    }),
                    catchError(() => {
                        return of(registerFailureAction())
                    })
                )
            } )
        )
    
    )

    constructor(private actions$: Actions, private authService: AuthService) {}
}