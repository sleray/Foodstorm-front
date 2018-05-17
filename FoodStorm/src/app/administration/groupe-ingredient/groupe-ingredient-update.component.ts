import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupeIngredientService } from './groupe-ingredient.service';
import { GroupeIngredient } from '../ingredient/ingredient';
import { AlertService } from '../../_services/alert.service';
import { AlertType } from '../../_models/alert';

@Component({
  selector: 'app-groupe-ingredient-update',
  templateUrl: './groupe-ingredient-update.component.html',
  styleUrls: ['./groupe-ingredient-update.component.scss']
})
export class GroupeIngredientUpdateComponent implements OnInit {
  pageTitle: string = "Modification d'un groupe d'ingrédient";
  groupeIngredient : GroupeIngredient = new GroupeIngredient();
  constructor(private route: ActivatedRoute, private router: Router, private service: GroupeIngredientService, private alertService :AlertService) { }
  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getGroupeIngredient(params['id']).subscribe(res => {
        this.groupeIngredient = res;
        console.log('get :'+res);
      });
    });
  }
  onSubmit() { 
    console.log("Modification d'un groupe d'ingredient : "+this.groupeIngredient.name);
    this.service.update(this.groupeIngredient).subscribe(res => {
      console.log(res);
      this.alertService.saveAlert(AlertType.Success,"Le groupe d'ingrédient a bien été modifié !");
      this.router.navigateByUrl("/admin/groupeingredients");
    });
}

back(){
  console.log("Annulation");
  this.router.navigateByUrl("/admin/groupeingredients");
}
}
