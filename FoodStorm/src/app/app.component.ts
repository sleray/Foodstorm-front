import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [
      MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppComponent implements OnInit{
  title = 'Food Storm';

  // life hook cycle
  ngOnInit(){}
}
