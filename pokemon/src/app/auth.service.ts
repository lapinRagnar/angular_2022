import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false
  redirectUrl: string;

  constructor() { }

  login(name: string, password: string): Observable<boolean> {

    const isLoggedIn = (name=='utilisateur1' && password=='xxxxxx' )

    return of(isLoggedIn).pipe(
      delay(2000), 
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )

  }

  logout() {
    this.isLoggedIn = false
  }

}
