import { Component, OnInit } from '@angular/core';
import { GroupeIngredientService } from './groupe-ingredient.service';
import { FormGroup, Validators } from '@angular/forms';
import { GroupeIngredient } from '../ingredient/ingredient';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { Alert, AlertType } from '../../_models/alert';

@Component({
  selector: 'app-groupe-ingredient-create',
  templateUrl: './groupe-ingredient-create.component.html',
  styleUrls: ['./groupe-ingredient-create.component.scss']
})
export class GroupeIngredientCreateComponent implements OnInit {
  pageTitle = "Nouveau groupe d'ingrédient";
  ngForm: FormGroup;
  groupeIngredient : GroupeIngredient = new GroupeIngredient();
  constructor(private service : GroupeIngredientService, private router : Router, private alertService : AlertService) { 
    
  }

 
  onSubmit() { 
      console.log("creation d'un groupe d'ingredient ! "+this.groupeIngredient);
      this.service.create(this.groupeIngredient).subscribe(res => {
        console.log(res);
        this.alertService.saveAlert(AlertType.Success,"Le groupe d'ingrédient a bien été créé !");
        this.router.navigateByUrl("/admin/groupeingredients");
      });
  }
  ngOnInit() {
  }

  back(){
    console.log("Annulation");
    this.router.navigateByUrl("/admin/groupeingredients");
  }

}
