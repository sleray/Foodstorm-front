import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../administration/ingredient/ingredient.service';
import { MenuService } from './menu.service';
import { Ingredient } from '../administration/ingredient/ingredient';

@Component({
  selector: 'app-random-menu',
  templateUrl: './random-menu.component.html',
  styleUrls: ['./random-menu.component.scss']
})
export class RandomMenuComponent implements OnInit {

  ingredients: Ingredient[] = [];
  errorMessage: string;
  
  constructor(private menuService : MenuService) { }

  ngOnInit() : void {
    this.menuService.getRandomMenu()
      .subscribe(ingredients => {
        this.ingredients = ingredients;        
      },
       error => this.errorMessage = <any>error);
  }  

  regenerateMenu(){   
    console.log('regenerer un menu !!!!!!!!!') ;
  }

}
