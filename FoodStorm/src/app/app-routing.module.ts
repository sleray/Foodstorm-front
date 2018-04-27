import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RandomMenuComponent } from './random-menu/random-menu.component';

const routes: Routes = [
  { path: 'forgotPassword', component: ForgotPasswordComponent },  
  { path: 'signin', component: SigninComponent, },
  { path: 'randomMenu', component: RandomMenuComponent, },
  { path: '', component: SigninComponent,  pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
