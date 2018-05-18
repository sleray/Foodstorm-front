import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.scss']
})
export class IngredientCreateComponent implements OnInit {

  pageTitle = "Création d'un ingrédient";
  constructor() { }

  ngOnInit() {
  }

}
