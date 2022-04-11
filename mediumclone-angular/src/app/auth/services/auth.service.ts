import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment'
import { AuthResponseInterface } from './../types/authResponse.interface';


import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
    
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface):Observable<CurrentUserInterface> {
        const url = environment.apiUrl
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(
            map((response: AuthResponseInterface) => response.user)
        )
    }
}