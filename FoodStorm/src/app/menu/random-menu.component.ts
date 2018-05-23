import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../administration/ingredient/ingredient.service';
import { MenuService } from './menu.service';
import { IIngredient, IGroupIngredient } from '../administration/ingredient/ingredient';

@Component({
  selector: 'app-random-menu',
  templateUrl: './random-menu.component.html',
  styleUrls: ['./random-menu.component.scss']
})
export class RandomMenuComponent implements OnInit {

  ingredients: IIngredient[] = [];
  errorMessage: string;
  
  constructor(private menuSevice : MenuService) { }

  ngOnInit() : void {
    this.menuSevice.getRandomMenu()
      .subscribe(ingredients => {
        this.ingredients = ingredients;        
      },
       error => this.errorMessage = <any>error);
  }  

  regenerateMenu(){   
    console.log('regenerer un menu !!!!!!!!!') ;
  }

}
