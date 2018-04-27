import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RandomMenuService {

  private ingredientUrl = '';
  constructor(
    private http: HttpClient
  ) { }

  getIngredients(){
    return this.http.get('/ingredients')
  }
  

}
