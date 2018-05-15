import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SigninService } from '../signin/signin.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router, 
    private authService: SigninService) { }
    canActivate() {
      if (!this.authService.isTokenExpired()) {
        return true;
      }
  
      this.router.navigate(['/']);
      return false;
    }
}
