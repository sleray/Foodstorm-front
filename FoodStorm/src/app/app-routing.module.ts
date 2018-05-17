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
import { AuthGuardService } from './guard/auth-guard.service';
import { IsAlreadyLoggedGuard } from './guard/is-already-logged.guard';
import { TypeIngredientUpdateComponent } from './administration/type-ingredient/type-ingredient-update.component';

const routes: Routes = [  
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardService] },  
  { path: 'forgotPassword', component: ForgotPasswordComponent },  
  { path: 'signin', component: SigninComponent },
  { path: 'about/contributors', component: ContributorsComponent },
  { path: 'admin/ingredients', component: IngredientListComponent },
  { path: 'admin/ingredients/:id',  component: IngredientDetailComponent },
  { path: 'admin/ingredients/new',  component: IngredientUpdateComponent },
  { path: 'admin/typeingredients',  component: TypeIngredientListComponent },  
  { path: 'admin/typeingredients/new',  component: TypeIngredientCreateComponent },  
  { path: 'admin/typeingredients/edit/:id',  component: TypeIngredientUpdateComponent }, 
  { path: '', component: SigninComponent,  pathMatch: 'full', canActivate: [IsAlreadyLoggedGuard]}
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
