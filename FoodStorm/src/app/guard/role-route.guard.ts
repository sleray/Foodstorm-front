import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SigninService } from '../signin/signin.service';
import * as _ from 'underscore';
import { AlertService } from '../_services/alert.service';
import { AlertType } from '../_models/alert';

@Injectable()
export class RoleRouteGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: SigninService,private alertService : AlertService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const requiresRole: string[] = next.data.requiredRoles;
    const userRole = this.authService.getUser().roles;
    if (userRole && requiresRole) {
      let userRoleTransform = userRole.map(iRole => iRole.name);
      console.log(requiresRole);
      console.log(userRole);
      console.log(userRoleTransform);
      let intersection = _.intersection(requiresRole, userRoleTransform);
      if (intersection.length > 0) {
        return true;
      }
    }
    this.alertService.error("Vous n'avez pas les droits nécessaire pour faire cette action");
    return false;
  }
}
