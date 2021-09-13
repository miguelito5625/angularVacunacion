import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  constructor(
    private router: Router
 ) { }


 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {

       return true;
    }
    // redirecciona a login cuando no esta logueado 
    this.router.navigate(['/']);
    return false;
 }

 public isLoggedIn(): boolean {
   return true;
    const token: string = localStorage.getItem('token')!;
    if (!token) {
      return false;      
    }
    const tokenData:any = jwt_decode(token);
    console.log("LOG GUARD");
    console.log(tokenData);
    
    const exp = tokenData.exp  * 1000;
    const nowTime = Date.now();
  
    if (nowTime >= exp) {
      console.log("token expiro");
      localStorage.removeItem('token');
      return false;
    } else {
      console.log("token aun no ha expirado");
    }
    
    if (tokenData.user.Rol === 1) {
       return true;
    }
    return false;
 }
  
}
