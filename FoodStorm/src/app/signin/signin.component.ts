import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorAuth } from './errorAuth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup
  login: string;
  password: string;
  private badAuth: boolean = false;
  private errorServeur: boolean = false;

  constructor(private _ss: SigninService, private router: Router, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  reset() {
    this.login = "";
    this.password = "";
    this.badAuth = false;
    this.errorServeur = false;
  }

  connectionAttemp() {
    this.badAuth = false;
    this.errorServeur = false;
    //Easy login
    this._ss.login(this.login, Md5.hashStr(this.password).toString())
      .subscribe(res => {
        if (!this._ss.isTokenExpired()) {
          this.router.navigate(['welcome']);
        }
      }, (err => {
        var jsonErr : ErrorAuth = JSON.parse(err);
        if (jsonErr.status != 200) {
          if (jsonErr.status == 404) {
            this.badAuth = true;
          } else {
            this.errorServeur = true;
          }
        }
      }));


  }
  getSignService() {
    return this._ss;
  }
}
