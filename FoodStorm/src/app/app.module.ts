import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutModule } from './about/about.module';
import { SigninService } from './signin/signin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './signin/authinterceptor';
import { AdministrationModule } from './administration/administration.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RandomMenuComponent } from './menu/random-menu.component';
import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuardModule } from './guard/guard.module';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent, SigninComponent, ForgotPasswordComponent, WelcomeComponent,AlertComponent,RandomMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    AboutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdministrationModule,
    GuardModule

  ],
  providers: [SigninService,HttpClientModule,AlertService,MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [  ],
  exports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ]
})
export class AppModule { }
