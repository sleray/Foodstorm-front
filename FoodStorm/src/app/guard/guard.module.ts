import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { IsAlreadyLoggedGuard } from './is-already-logged.guard';
import { RoleRouteGuard } from './role-route.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuardService, IsAlreadyLoggedGuard, RoleRouteGuard]
})
export class GuardModule { }
