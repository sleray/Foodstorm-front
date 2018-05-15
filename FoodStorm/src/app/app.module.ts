import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutModule } from './about/about.module';
import { SigninService } from './signin/signin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './signin/authinterceptor';
import { AdministrationModule } from './administration/administration.module';
import { CommonModule } from '@angular/common';
import { GuardModule } from './guard/guard.module';


@NgModule({
  declarations: [
    AppComponent, SigninComponent, ForgotPasswordComponent, WelcomeComponent
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
    HttpClientModule,
    AdministrationModule,
    GuardModule
  ],
  providers: [SigninService,HttpClientModule,
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
    AppRoutingModule
  ]
})
export class AppModule { }
