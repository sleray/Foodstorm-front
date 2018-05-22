import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { IngredientService } from './ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Ingredient, TypeIngredient, GroupeIngredient } from './ingredient';
import { TypeIngredientService } from '../type-ingredient/type-ingredient.service';
import { GroupeIngredientService } from '../groupe-ingredient/groupe-ingredient.service';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.scss']
})
export class IngredientCreateComponent implements OnInit {

  pageTitle = "Création d'un ingrédient";
  ngForm: FormGroup;
  ingredient : Ingredient = new Ingredient();
  listTypes : TypeIngredient[];
  listGroupes : GroupeIngredient[];
  constructor(private router: Router, private ingredientService: IngredientService,
    private typeIngredientService: TypeIngredientService,
    private GroupeIngredientService: GroupeIngredientService,
    private alertService :AlertService) { }
  

  ngOnInit() {
    console.log('On init, create ingredient');
    //getting Types and groups lists

  }

  back(){
    console.log("Annulation");
    this.router.navigateByUrl("/admin/ingredients");
  }

}
