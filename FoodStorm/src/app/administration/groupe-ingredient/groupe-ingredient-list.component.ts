import { Component, OnInit, transition, trigger, animate, style } from '@angular/core';
import { GroupeIngredient } from '../ingredient/ingredient';
import { GroupeIngredientService } from './groupe-ingredient.service';
import { AlertService } from '../../_services/alert.service';
import { Alert, AlertType } from '../../_models/alert';

@Component({
  selector: 'app-groupe-ingredient-list',
  templateUrl: './groupe-ingredient-list.component.html',
  styleUrls: ['./groupe-ingredient-list.component.scss'],
  
})
export class GroupeIngredientListComponent implements OnInit {
  pageTitle = "Groupes d'ingrédients";
  groupeIngredients : GroupeIngredient[] = [];
  constructor(private service : GroupeIngredientService, private alertService: AlertService) { }

  ngOnInit() {
    this.getList();
    //If an alert is saved, show it then clear the list
    console.log("ngOnInit");
    this.alertService.showSavedAlerts();
   
  }

  
  getList() {
    this.service.getListGroupeIngredients().subscribe(res => {
      this.groupeIngredients = res;
    });
  }

  delete(id : number){
    this.service.delete(id)
    .subscribe(()=> {
      this.service.getListGroupeIngredients().subscribe(res => {
        this.groupeIngredients = res;
        this.alertService.warn("Le groupe d'ingrédient a bien été supprimé !");

      });
    });
  }

}
