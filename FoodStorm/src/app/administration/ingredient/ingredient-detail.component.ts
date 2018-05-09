import { Component, OnInit } from '@angular/core';
import { IIngredient } from './ingredient';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  pageTitle: string = "Détail de l'ingrédient : ";
  errorMessage: string;
  ingredient: IIngredient;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _ingredientService: IngredientService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getIngredient(id);
    }
  }

  getIngredient(id: number) {
    this._ingredientService.getIngredient(id).subscribe(
      ingredient => this.ingredient = ingredient,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/admin/ingredients']);
  }
}
