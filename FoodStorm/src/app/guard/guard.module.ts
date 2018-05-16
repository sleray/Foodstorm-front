import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { IsAlreadyLoggedGuard } from './is-already-logged.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuardService, IsAlreadyLoggedGuard]
})
export class GuardModule { }
