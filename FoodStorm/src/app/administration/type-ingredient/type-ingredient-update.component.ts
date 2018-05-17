import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeIngredientService } from './type-ingredient.service';
import { TypeIngredient } from '../ingredient/ingredient';
import { AlertService } from '../../_services/alert.service';
import { AlertType } from '../../_models/alert';

@Component({
  selector: 'app-type-ingredient-update',
  templateUrl: './type-ingredient-update.component.html',
  styleUrls: ['./type-ingredient-update.component.scss']
})
export class TypeIngredientUpdateComponent implements OnInit {
  pageTitle: string = "Modification d'un type d'ingrédient";
  typeIngredient : TypeIngredient = new TypeIngredient();
  constructor(private route: ActivatedRoute, private router: Router, private service: TypeIngredientService, private alertService :AlertService) { }
  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getTypeIngredient(params['id']).subscribe(res => {
        this.typeIngredient = res;
        console.log('get :'+res);
      });
    });
  }
  onSubmit() { 
    console.log("Modification d'un type d'ingredient : "+this.typeIngredient.name);
    this.service.update(this.typeIngredient).subscribe(res => {
      console.log(res);
      this.alertService.saveAlert(AlertType.Success,"Le type d'ingrédient a bien été modifié !");
      this.router.navigateByUrl("/admin/typeingredients");
    });
}

back(){
  console.log("Annulation");
  this.router.navigateByUrl("/admin/typeingredients");
}
}
