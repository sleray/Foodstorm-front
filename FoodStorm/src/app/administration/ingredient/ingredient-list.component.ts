import { Component, OnInit } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { IIngredient } from './ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

      pageTitle: string = 'Liste des ingrédients';
      imageWidth: number = 50;
      imageMargin: number = 2;
      showImage: boolean = false;
      errorMessage: string;
  
      _listFilter: string;
      get listFilter(): string {
          return this._listFilter;
      }
      set listFilter(value: string) {
          this._listFilter = value;
          this.filteredIngredients = this.listFilter ? this.performFilter(this.listFilter) : this.ingredients;
      }
  
      filteredIngredients: IIngredient[];
      ingredients: IIngredient[] = [];
  
      constructor(private _ingredientService: IngredientService) {
  
      }
  
      performFilter(filterBy: string): IIngredient[] {
          filterBy = filterBy.toLocaleLowerCase();
          return this.ingredients.filter((ingredient: IIngredient) =>
          ingredient.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
  
      toggleImage(): void {
          this.showImage = !this.showImage;
      }
  
      ngOnInit(): void {
          this._ingredientService.getIngredients()
                  .subscribe(ingredients => {
                      this.ingredients = ingredients;
                      this.filteredIngredients = this.ingredients;
                  },
                      error => this.errorMessage = <any>error);
      }
  }
  
