import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../administration/ingredient.service';

@Component({
  selector: 'app-random-menu',
  templateUrl: './random-menu.component.html',
  styleUrls: ['./random-menu.component.scss']
})
export class RandomMenuComponent implements OnInit {

  private starter;
  private mainCourse;
  private accompaniment;
  private dessert;
  
  constructor(private ingredientService: IngredientService) { }


  ngOnInit() {
  }

  regenerateMenu(){   
    console.log('regenerer un menu !!!!!!!!!') ;
  }

}
