import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form : FormGroup
  login : string;
  password : string;

  constructor(private _ss: SigninService, private router : Router, private formBuilder : FormBuilder) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      login : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    });
  }

  reset(){
    this.login = "";
    this.password = "";
  }

  connectionAttemp(){
    console.log("Connection attemp from "+this.login+" with password :"+this.password+" (Security level = MAX)");
    //Easy login
   var toto = this._ss.login(this.login, Md5.hashStr(this.password).toString());
   
   if(this._ss.isTokenExpired()){
      console.log("not connected");
   }else{
      console.log("connected");
      this.router.navigate(['welcome']);
   }
  }
}
