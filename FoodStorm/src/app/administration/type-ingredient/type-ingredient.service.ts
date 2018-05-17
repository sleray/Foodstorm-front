import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { TypeIngredient } from '../ingredient/ingredient';

export type EntityResponseType = HttpResponse<TypeIngredient>;
export type EntityArrayResponseType = HttpResponse<TypeIngredient[]>;

@Injectable()
export class TypeIngredientService {

    private _contribUrl = './api/typeingredients.json';
    //TODO set a global variable, varying from env.
    private resourceUrl = 'typeingredients/';
    

    constructor(private _http: HttpClient) { }

    getListTypeIngredients(): Observable<TypeIngredient[]> {

      return this._http.get<TypeIngredient[]>(this.resourceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }
    getTypeIngredient(id : number): Observable<TypeIngredient> {

      return this._http.get<TypeIngredient[]>(this.resourceUrl+"/"+id)
      .do(data => console.log('get('+id+'): ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    create(typeIngredient: TypeIngredient): Observable<EntityResponseType> {

      const copy = this.convert(typeIngredient);
      console.log("convert id :"+copy.id+" ; name : "+copy.name); 
      return this._http
        .post<TypeIngredient>(this.resourceUrl, copy,  {observe: 'response'} )
        .map((res: EntityResponseType) => this.convertResponse(res));
    }
  
    update(typeIngredient: TypeIngredient): Observable<EntityResponseType> {
      const copy = this.convert(typeIngredient);
      console.log("convert id :"+copy.id+" ; name : "+copy.name); 
      return this._http
        .put<TypeIngredient>(this.resourceUrl, copy, { observe: 'response' })
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
      const body: TypeIngredient = this.convertItemFromServer(res.body);
      return res.clone({ body });
    }
  
    private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
      const jsonResponse: TypeIngredient[] = res.body;
      const body: TypeIngredient[] = [];
      for (let i = 0; i < jsonResponse.length; i++) {
        body.push(this.convertItemFromServer(jsonResponse[i]));
      }
      return res.clone({ body });
    }
  
    /**
     * Convert a returned JSON object to ITypeIngredient.
     */
    private convertItemFromServer(typeIngredient: TypeIngredient): TypeIngredient {
      const copy: TypeIngredient = Object.assign({}, typeIngredient, {});
      return copy;
    }
  /**
   * Convert a ITypeIngredient to a JSON which can be sent to the server.
   */
  private convert(typeIngredient: TypeIngredient): TypeIngredient {
    const copy: TypeIngredient = Object.assign({}, typeIngredient, {});
    
    return copy;
  }
}
