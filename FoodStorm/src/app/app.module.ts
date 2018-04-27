import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutModule } from './about/about.module';
import { SigninService } from './signin/signin.service';

@NgModule({
  declarations: [
    AppComponent, SigninComponent, ForgotPasswordComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    AboutModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
