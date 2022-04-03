import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log("route canActivate: ", route);

    const id = +route.url[1].path   // + plus permet de convertir le string en nombre

    console.log("id dans le canActivate", id);
    
    if (isNaN(id) || id <= 0 ) {
      
      this.router.navigate(['/hotels'])
      alert("hotel inconnu lesy les mecs!")
      
      return false
    }
    return true;
  }
  
}
