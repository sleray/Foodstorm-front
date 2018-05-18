import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../administration/ingredient/ingredient.service';
import { RandomMenuService } from './menu.service';
import { IIngredient, IGroupIngredient } from '../administration/ingredient/ingredient';

@Component({
  selector: 'app-random-menu',
  templateUrl: './random-menu.component.html',
  styleUrls: ['./random-menu.component.scss']
})
export class RandomMenuComponent implements OnInit {

  // private starter;
  // private mainCourse;
  // private accompaniment;
  // private dessert;

  ingredients: IIngredient[] = [];
  groups: IGroupIngredient[] = [];
  errorMessage: string;
  
  constructor(private randomMenuSevice : RandomMenuService) { }

  ngOnInit() : void {
    this.randomMenuSevice.getRandomMenu()
      .subscribe(ingredients => {
        this.ingredients = ingredients;        
      },
       error => this.errorMessage = <any>error);
  }  

  regenerateMenu(){   
    console.log('regenerer un menu !!!!!!!!!') ;
  }

}
