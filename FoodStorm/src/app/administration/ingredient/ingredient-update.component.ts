import { Component, OnInit } from '@angular/core';
import { IIngredient } from './ingredient';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from './ingredient.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ingredient-update',
  templateUrl: './ingredient-update.component.html',
  styleUrls: ['./ingredient-update.component.scss']
})
export class IngredientUpdateComponent implements OnInit {

  //New or update
  pageTitle : string;
  ingredient : IIngredient;
  isSaving: boolean;

  constructor(private _route: ActivatedRoute, private _ingredientService : IngredientService) { 
   

  }

  ngOnInit() {
    if (this.ingredient != null ){
      this.pageTitle = "Modifier l'ingredient "+this.ingredient.name;
    } else {
      this.pageTitle = 'Créer un nouvel ingredient';
    }
    this.isSaving = false;
    this._route.data.subscribe(({ ingredient }) => {
      this.ingredient = ingredient.body ? ingredient.body : ingredient;
    });
    
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    if (this.ingredient.id !== undefined) {
      this.subscribeToSaveResponse(this._ingredientService.update(this.ingredient));
    } else {
      this.subscribeToSaveResponse(this._ingredientService.create(this.ingredient));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IIngredient>>) {
    result.subscribe((res: HttpResponse<IIngredient>) => this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess(result: IIngredient) {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
  }

}
