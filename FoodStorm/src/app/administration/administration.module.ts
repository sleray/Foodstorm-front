import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient/ingredient-list.component';
import { IngredientService } from './ingredient/ingredient.service';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { IngredientDetailComponent } from './ingredient/ingredient-detail.component';
import { IngredientUpdateComponent } from './ingredient/ingredient-update.component';
import { TypeIngredientListComponent } from './type-ingredient/type-ingredient-list.component';
import { TypeIngredientService } from './type-ingredient/type-ingredient.service';
import { TypeIngredientCreateComponent } from '../administration/type-ingredient/type-ingredient-create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [IngredientListComponent, IngredientDetailComponent, IngredientUpdateComponent, TypeIngredientListComponent, TypeIngredientCreateComponent],
  providers: [IngredientService, TypeIngredientService, FormBuilder]
})
export class AdministrationModule { }
