import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Data, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGateServiceService implements CanActivate {


  constructor( private logInState:DataService, private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.logInState.isLoggedIn         // {1}
      .pipe(
        take(1),                              // {2}
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn){
            this.router.navigate(['/login']);  // {4}
            return false;
          }
          return true;
        }));
  }
}
