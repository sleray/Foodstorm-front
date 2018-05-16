import { Component, OnInit } from '@angular/core';
import { TypeIngredientService } from './type-ingredient.service';
import { FormGroup, Validators } from '@angular/forms';
import { TypeIngredient } from '../ingredient/ingredient';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { Alert, AlertType } from '../../_models/alert';

@Component({
  selector: 'app-type-ingredient-create',
  templateUrl: './type-ingredient-create.component.html',
  styleUrls: ['./type-ingredient-create.component.scss']
})
export class TypeIngredientCreateComponent implements OnInit {
  pageTitle = "Nouveau type d'ingrédient";
  ngForm: FormGroup;
  typeIngredient : TypeIngredient = new TypeIngredient();
  constructor(private service : TypeIngredientService, private router : Router, private alertService : AlertService) { 
    
  }

 
  onSubmit() { 
      console.log("creation d'un type d'ingredient ! "+this.typeIngredient);
      this.service.create(this.typeIngredient).subscribe(res => {
        console.log(res);
        this.alertService.saveAlert(AlertType.Success,"Le type d'ingrédient a bien été créé !");
        this.router.navigateByUrl("/admin/typeingredients");
      });
  }
  ngOnInit() {
  }

}
