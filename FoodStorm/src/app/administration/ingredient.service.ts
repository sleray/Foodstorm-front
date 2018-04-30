import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IIngredient } from './ingredient';



@Injectable()
export class IngredientService {
    private _contribUrl = './api/ingredients.json';
    private _randomMenuUrl = 'http://localhost:8080/foodstorm-back/ingredients/';

    constructor(private _http: HttpClient) { }

    getIngredients(): Observable<IIngredient[]> {
        return this._http.get<IIngredient[]>(this._contribUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    // pour randomMenu
    getIngredientsRandomMenu(): Observable<IIngredient[]> {
        return this._http.get<IIngredient[]>(this._randomMenuUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getIngredient(id: number): Observable<IIngredient> {
      return this.getIngredients()
          .map((ingredients: IIngredient[]) => ingredients.find(p => p.id === id));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
