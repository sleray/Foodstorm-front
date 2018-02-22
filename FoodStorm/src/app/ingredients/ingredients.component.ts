import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredient: IngredientComponent = {
    id:1,
    name:'Tomate',
    type:'Légume'
  };

  constructor() {}

  ngOnInit() {}

 

}
