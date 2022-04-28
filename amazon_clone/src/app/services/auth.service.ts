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

  constructor(
    private auth: Auth, 
    private ngZone: NgZone,
    private router: Router
  ) {

  }

  signIn(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then((result) => {
      console.log("on est connecté! ", result.user.email);
      this.router.navigate(['/'])
    }).catch((error) => {
      console.log('misy probleme', error.message)
    })

  }

  signUp(email: any, password: any) {

    createUserWithEmailAndPassword(this.auth, email, password)
    .then((result: any) => {
      console.log("utilisateur crée ", result.user)
      this.router.navigate(['/'])
    }).catch((err) => {
      console.log("misy pb", err.message)
    })  

  }

  logOut() {
    signOut(this.auth).then(() => {
      console.log("tu es bien deconnecté!")
    })
  }


}



// import { Injectable, NgZone } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth'
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(
//     private fbAuth: AngularFireAuth, 
//     private ngZone: NgZone,
//     private router: Router
//   ) {

//     this.fbAuth.authState.subscribe((user) => {
//       if (user) {
//         console.log("utilisateur", user)
//       }
//     })
//   }

//   signIn(email: any, password: any) {
//     return this.fbAuth.signInWithEmailAndPassword(email, password).then((result) => {
//       this.router.navigate(['/'])
//     }).catch((error) => {
//       console.log('misy probleme', error.message)
//     })
//   }

//   signUp(email: any, password: any) {
//     return this.fbAuth.createUserWithEmailAndPassword(email, password).then((result) => {
//       this.router.navigate(['/'])
//     }).catch((error) => {
//       console.log('misy probleme', error.message)
//     })
//   }

//   logOut() {
//     return this.fbAuth.signOut().then(() => {
//       this.router.navigate(['/login'])
//     })
//   }


// }
