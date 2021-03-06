import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Ingredient } from './ingredient';

export type EntityResponseType = HttpResponse<Ingredient>;
export type EntityArrayResponseType = HttpResponse<Ingredient[]>;

@Injectable()
export class IngredientService {

    private resourceUrl = 'ingredients/';
    
    constructor(private _http: HttpClient) { }


    getIngredients(): Observable<Ingredient[]> {
        return this._http.get<Ingredient[]>(this.resourceUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getIngredient(id: number): Observable<Ingredient> {
      return this.getIngredients()
          .map((ingredients: Ingredient[]) => ingredients.find(p => p.id === id));
    }

    create(ingredient: Ingredient): Observable<EntityResponseType> {
      const copy = this.convert(ingredient);
      return this._http
        .post<Ingredient>(this.resourceUrl, copy, { observe: 'response' })
        .map((res: EntityResponseType) => this.convertResponse(res));
    }
  
    update(ingredient: Ingredient): Observable<EntityResponseType> {
      const copy = this.convert(ingredient);
      return this._http
        .put<Ingredient>(this.resourceUrl, copy, { observe: 'response' })
        .map((res: EntityResponseType) => this.convertResponse(res));
    }
//This header (responseType : text) is required when back-end returns a string or Void.
delete(id) {
  const uri = this.resourceUrl + id;
  var retour = this
  ._http
  .delete(uri,     {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text' 
 }).catch(this.handleError);
  console.log('retour :'+retour);    
  return retour;
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

    private convertResponse(res: EntityResponseType): EntityResponseType {
      const body: Ingredient = this.convertItemFromServer(res.body);
      return res.clone({ body });
    }
  
    private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
      const jsonResponse: Ingredient[] = res.body;
      const body: Ingredient[] = [];
      for (let i = 0; i < jsonResponse.length; i++) {
        body.push(this.convertItemFromServer(jsonResponse[i]));
      }
      return res.clone({ body });
    }
  
    /**
     * Convert a returned JSON object to IIngredient.
     */
    private convertItemFromServer(ingredient: Ingredient): Ingredient {
      const copy: Ingredient = Object.assign({}, ingredient, {});
      return copy;
    }
  /**
   * Convert a IIngredient to a JSON which can be sent to the server.
   */
  private convert(ingredient: Ingredient): Ingredient {
    const copy: Ingredient = Object.assign({}, ingredient, {});
    return copy;
  }
}
