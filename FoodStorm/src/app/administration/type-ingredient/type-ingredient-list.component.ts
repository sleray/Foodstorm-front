import { Component, OnInit } from '@angular/core';
import { TypeIngredient } from '../ingredient/ingredient';
import { TypeIngredientService } from './type-ingredient.service';
import { AlertService } from '../../_services/alert.service';
import { Alert, AlertType } from '../../_models/alert';

@Component({
  selector: 'app-type-ingredient-list',
  templateUrl: './type-ingredient-list.component.html',
  styleUrls: ['./type-ingredient-list.component.scss']
})
export class TypeIngredientListComponent implements OnInit {
  pageTitle = "Types d'ingrédients";
  typeIngredients : TypeIngredient[] = [];
  constructor(private service : TypeIngredientService, private alertService: AlertService) { }

  ngOnInit() {
    this.getList();
    //If an alert is saved, show it then clear the list
    console.log("ngOnInit");
    this.alertService.showSavedAlerts();
   
  }

  getList() {
    this.service.getListTypeIngredients().subscribe(res => {
      this.typeIngredients = res;
    });
  }

  delete(id : number){
    this.service.delete(id)
    .subscribe(()=> {
      this.service.getListTypeIngredients().subscribe(res => {
        this.typeIngredients = res;
        this.alertService.warn("Le type d'ingrédient a bien été supprimé !");

      });
    });
  }

}
