import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule,CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecetteComponent } from './recette/recette.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent, 
    RecetteComponent, IngredientsComponent, SigninComponent, ForgotPasswordComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
