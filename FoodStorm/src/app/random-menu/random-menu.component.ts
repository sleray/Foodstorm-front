import { Component, OnInit } from '@angular/core';
import { RandomMenuService } from '../random-menu.service';

@Component({
  selector: 'app-random-menu',
  templateUrl: './random-menu.component.html',
  styleUrls: ['./random-menu.component.scss']
})
export class RandomMenuComponent implements OnInit {

  public ingredients;

  constructor(private randomMenuService: RandomMenuService) { }


  ngOnInit() {
  }

  genererMenu(){
    this.randomMenuService.getIngredients();
  }

}
