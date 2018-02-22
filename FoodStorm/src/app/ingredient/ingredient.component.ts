import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {

  constructor() { }

  id: number;
  name: string;
  type: string;
  

}
