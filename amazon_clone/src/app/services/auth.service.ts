import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { 
  Auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any
  userLoggedIn: boolean = false

  constructor(
    public auth: Auth, 
    private ngZone: NgZone,
    private router: Router
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true
        this.userData = user
        localStorage.setItem('user', this.userData.email)
      } else
      {
        this.userLoggedIn = false
      }
    })
  }

  signIn(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then((result) => {
      const user = result.user
      console.log("on est connecté! ", user);
      this.router.navigate(['/'])
    }).catch((error) => {
      console.log('misy probleme - erreur code: ', error.code, "message : ", error.message)
    })

  }

  signUp(email: any, password: any) {

    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((result: any) => {
      const user = result.user
      console.log("utilisateur crée ", user)
      this.router.navigate(['/'])
    }).catch((err) => {
      const errorCode = err.code
      const errorMessage = err.message
      console.log("misy pb - code :", errorCode , "message : ", errorMessage)
    })  

  }

  logOut() {
    return signOut(this.auth).then(() => {
      console.log("tu es bien deconnecté!")
      localStorage.removeItem('user')
    }).catch((error) => {
      // An error happened.
    })
  }

  getUser() {
    const user = localStorage.getItem('user')
    return user ? true : null
  }


}
