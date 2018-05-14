import { Component, OnInit } from '@angular/core';
import { TypeIngredientService } from './type-ingredient.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeIngredient } from '../ingredient/ingredient';

@Component({
  selector: 'app-type-ingredient-create',
  templateUrl: './type-ingredient-create.component.html',
  styleUrls: ['./type-ingredient-create.component.scss']
})
export class TypeIngredientCreateComponent implements OnInit {
  pageTitle = "Nouvel type d'ingrédient";
  ngForm: FormGroup;
  typeIngredient : TypeIngredient = new TypeIngredient();
  constructor(private service : TypeIngredientService, private fb: FormBuilder) { 
    
  }

 
  onSubmit() { 
      console.log("creation d'un type d'ingredient ! "+this.typeIngredient);
      this.service.create(this.typeIngredient).subscribe(res => {
        console.log(res);
      });
  }
  ngOnInit() {
  }

}
