import { Component, OnInit, transition, trigger, animate, style, state } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { IIngredient } from './ingredient';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('fadeIn',style({ opacity: 1 })),
      state('fadeOut',style({ opacity: 0 })),
      transition('* => fadeIn', [
        // fade in Animation
        style({ opacity: 0 }),
        animate(3000, style({ opacity: 1 }))
        
      ]),
      transition('* => fadeOut', [
        // fade out Animation
        animate(3000, style({ opacity: 0 }))
        
      ])
    ])
  ]
})
export class IngredientListComponent implements OnInit {

      pageTitle: string = 'Liste des ingrédients';
      fadeDirection='fadeIn';
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
  
      constructor(private service: IngredientService, private alertService : AlertService) {
  
      }
  
      performFilter(filterBy: string): IIngredient[] {
          filterBy = filterBy.toLocaleLowerCase();
          return this.ingredients.filter((ingredient: IIngredient) =>
          ingredient.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
  
      toggleImage(): void {
        
          this.showImage = !this.showImage;
          console.log('toggleImage : '+this.showImage);
      }
  
      ngOnInit(): void {
          this.service.getIngredients()
                  .subscribe(ingredients => {
                      this.ingredients = ingredients;
                      this.filteredIngredients = this.ingredients;
                  },
                      error => this.errorMessage = <any>error);
      }

       //Animation code
   fadeIn() {
    this.fadeDirection = 'fadeIn';
  }
  fadeOut() {
    this.fadeDirection = 'fadeOut';
  }
  toggle() {
    this.fadeDirection == 'fadeOut' ? this.fadeIn() : this.fadeOut();
    this.toggleImage(); //to update eye image and title
  }
  delete(id : number){
    this.service.delete(id)
    .subscribe(()=> {
      this.service.getIngredients().subscribe(res => {
        this.ingredients = res;
        this.filteredIngredients = this.ingredients;
        this.alertService.warn("L'ingrédient a bien été supprimé !");

      });
    });
  }
     
  }
  
