import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login : string;
  password : string;
  passwordEncrypt : string;
  constructor() {  }

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
}
