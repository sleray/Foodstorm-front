import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IngredientListComponent } from './ingredient/ingredient-list.component';
import { IngredientDetailComponent } from './ingredient/ingredient-detail.component';
import { IngredientUpdateComponent } from './ingredient/ingredient-update.component';
import { IngredientService } from './ingredient/ingredient.service';

import { TypeIngredientListComponent } from './type-ingredient/type-ingredient-list.component';
import { TypeIngredientCreateComponent } from '../administration/type-ingredient/type-ingredient-create.component';
import { TypeIngredientUpdateComponent } from './type-ingredient/type-ingredient-update.component';
import { TypeIngredientService } from './type-ingredient/type-ingredient.service';

import { GroupeIngredientUpdateComponent } from './groupe-ingredient/groupe-ingredient-update.component';
import { GroupeIngredientListComponent } from './groupe-ingredient/groupe-ingredient-list.component';
import { GroupeIngredientCreateComponent } from '../administration/groupe-ingredient/groupe-ingredient-create.component';
import { GroupeIngredientService } from './groupe-ingredient/groupe-ingredient.service';

import { AlertService } from '../_services/alert.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [IngredientListComponent, IngredientDetailComponent, IngredientUpdateComponent, 
    TypeIngredientListComponent, TypeIngredientCreateComponent, TypeIngredientUpdateComponent,
    GroupeIngredientListComponent, GroupeIngredientCreateComponent, GroupeIngredientUpdateComponent],
  providers: [IngredientService, TypeIngredientService, GroupeIngredientService,FormBuilder, AlertService],
  exports:[    BrowserAnimationsModule]
})
export class AdministrationModule { }
