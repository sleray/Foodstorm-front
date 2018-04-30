import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list.component';
import { IngredientService } from './ingredient.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { IngredientDetailComponent } from './ingredient-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [IngredientListComponent, IngredientDetailComponent],
  providers: [IngredientService]
})
export class AdministrationModule { }
