import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutModule } from './about/about.module';
import { SigninService } from './signin/signin.service';
import { AdministrationModule } from './administration/administration.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RandomMenuComponent } from './random-menu/random-menu.component';

@NgModule({
  declarations: [
    AppComponent, SigninComponent, ForgotPasswordComponent, WelcomeComponent, RandomMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    AboutModule,
    AdministrationModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent],
  schemas: [  ],
  exports:[
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class AppModule { }
