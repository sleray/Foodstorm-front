import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContributorsComponent } from './about/contributors.component';
import { IngredientListComponent } from './administration/ingredient-list.component';
import { IngredientDetailComponent } from './administration/ingredient-detail.component';
import { RandomMenuComponent } from './random-menu/random-menu.component';

const routes: Routes = [  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'forgotPassword', component: ForgotPasswordComponent },  
  { path: 'signin', component: SigninComponent },
  { path: 'about/contributors', component: ContributorsComponent },
  { path: 'admin/ingredients', component: IngredientListComponent },
  { path: 'ingredients/:id',  component: IngredientDetailComponent },
  { path: 'randomMenu',  component: RandomMenuComponent },
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
