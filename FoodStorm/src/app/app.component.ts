import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageTitle: string = 'FoodStorm beta';



  constructor(private _ss: SigninService,private router: Router) {

  }

  getSignService() {
    return this._ss;
  }
  logout() {
    this._ss.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

  test(){
    console.log('test selection generer menu');
    
  }
}
