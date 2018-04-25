import { Component, OnInit  } from '@angular/core';
import { SigninService } from './signin/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pageTitle: string = 'FoodStorm beta';
 
 

  constructor(private _ss: SigninService) {
    _ss.connectedUser = null;


  }



  ngOnInit() {
 
}
  }
