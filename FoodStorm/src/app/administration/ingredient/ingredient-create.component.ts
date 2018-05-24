import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { IngredientService } from './ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Ingredient, TypeIngredient, GroupeIngredient } from './ingredient';
import { TypeIngredientService } from '../type-ingredient/type-ingredient.service';
import { GroupeIngredientService } from '../groupe-ingredient/groupe-ingredient.service';
import { AlertType } from '../../_models/alert';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.scss']
})
export class IngredientCreateComponent implements OnInit {

  pageTitle = "Création d'un ingrédient";
  ngForm: FormGroup;
  ingredient: Ingredient = new Ingredient();
  listTypes: TypeIngredient[];
  listGroupes: GroupeIngredient[];
  constructor(private router: Router, private ingredientService: IngredientService,
    private typeIngredientService: TypeIngredientService,
    private groupeIngredientService: GroupeIngredientService,
    private alertService: AlertService) { }


  ngOnInit() {
    console.log('On init, create ingredient');
    //getting Types and groups lists
    this.typeIngredientService.getListTypeIngredients()
      .subscribe(types => {
        this.listTypes = types;
      });
    this.groupeIngredientService.getListGroupeIngredients()
      .subscribe(groupes => {
        this.listGroupes = groupes;
      });

  }

  onSubmit() { 
    console.log("creation d'un ingredient ! "+this.ingredient);
    this.ingredientService.create(this.ingredient).subscribe(res => {
      console.log(res);
      this.alertService.saveAlert(AlertType.Success,"L'ingrédient a bien été créé !");
      this.router.navigateByUrl("/admin/ingredients");
    });
}

  back() {
    console.log("Annulation");
    this.router.navigateByUrl("/admin/ingredients");
  }

}
