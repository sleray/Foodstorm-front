import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SigninService } from '../signin/signin.service';

@Injectable()
export class IsAlreadyLoggedGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: SigninService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isTokenExpired()) {
        this.router.navigate(['welcome']);
        return false;
      }
  
      return true;
  }
}
