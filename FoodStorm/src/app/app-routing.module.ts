import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContributorsComponent } from './about/contributors.component';
import { IngredientListComponent } from './administration/ingredient/ingredient-list.component';
import { IngredientDetailComponent } from './administration/ingredient/ingredient-detail.component';
import { IngredientUpdateComponent } from './administration/ingredient/ingredient-update.component';
import { TypeIngredientListComponent } from './administration/type-ingredient/type-ingredient-list.component';
import { TypeIngredientCreateComponent } from './administration/type-ingredient/type-ingredient-create.component';

const routes: Routes = [  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'forgotPassword', component: ForgotPasswordComponent },  
  { path: 'signin', component: SigninComponent },
  { path: 'about/contributors', component: ContributorsComponent },
  { path: 'admin/ingredients', component: IngredientListComponent },
  { path: 'admin/ingredients/:id',  component: IngredientDetailComponent },
  { path: 'admin/ingredients/new',  component: IngredientUpdateComponent },
  { path: 'admin/typeingredients',  component: TypeIngredientListComponent },  
  { path: 'admin/typeingredients/new',  component: TypeIngredientCreateComponent },  
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
