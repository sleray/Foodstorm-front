import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login : string;
  password : string;
  passwordEncrypt : string;

  constructor(private _ss: SigninService, private router : Router) {
  }
  ngOnInit() {
  }

  md5Password(){
    this.passwordEncrypt = Md5.hashStr(this.password).toString();
  }
  reset(){
    this.login = "";
    this.password = "";
    this.passwordEncrypt = "";
  }

  connectionAttemp(){
    console.log("Connection attemp from "+this.login+" with password :"+this.password+" (Security level = MAX)");
    //Easy login
   this._ss.connectionAttemp(this.login);
   this.router.navigate(['welcome']);
  }
}
