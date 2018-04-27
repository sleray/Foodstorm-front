import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContributorsComponent } from './about/contributors.component';

const routes: Routes = [  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'forgotPassword', component: ForgotPasswordComponent },  
  { path: 'signin', component: SigninComponent },
  { path: 'about/contributors', component: ContributorsComponent },
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
