import { Component, OnInit } from '@angular/core';
import { TypeIngredient } from '../ingredient/ingredient';
import { TypeIngredientService } from './type-ingredient.service';

@Component({
  selector: 'app-type-ingredient-list',
  templateUrl: './type-ingredient-list.component.html',
  styleUrls: ['./type-ingredient-list.component.scss']
})
export class TypeIngredientListComponent implements OnInit {
  pageTitle = "Types d'ingrédients";
  typeIngredients : TypeIngredient[] = [];
  constructor(private service : TypeIngredientService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.getListTypeIngredients().subscribe(res => {
      this.typeIngredients = res;
    });
  }

}
