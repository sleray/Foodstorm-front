import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { GroupeIngredient } from '../ingredient/ingredient';

export type EntityResponseType = HttpResponse<GroupeIngredient>;
export type EntityArrayResponseType = HttpResponse<GroupeIngredient[]>;

@Injectable()
export class GroupeIngredientService {

    private resourceUrl = 'groupingredients/';
    

    constructor(private _http: HttpClient) { }

    getListGroupeIngredients(): Observable<GroupeIngredient[]> {

      return this._http.get<GroupeIngredient[]>(this.resourceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }
    getGroupeIngredient(id : number): Observable<GroupeIngredient> {

      return this._http.get<GroupeIngredient[]>(this.resourceUrl+"/"+id)
      .do(data => console.log('get('+id+'): ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    create(groupeIngredient: GroupeIngredient): Observable<EntityResponseType> {

      const copy = this.convert(groupeIngredient);
      console.log("convert id :"+copy.id+" ; name : "+copy.name); 
      return this._http
        .post<GroupeIngredient>(this.resourceUrl, copy,  {observe: 'response'} )
        .map((res: EntityResponseType) => this.convertResponse(res));
    }
  
    update(groupeIngredient: GroupeIngredient): Observable<EntityResponseType> {
      const copy = this.convert(groupeIngredient);
      console.log("convert id :"+copy.id+" ; name : "+copy.name); 
      return this._http
        .put<GroupeIngredient>(this.resourceUrl, copy, { observe: 'response' })
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
      const body: GroupeIngredient = this.convertItemFromServer(res.body);
      return res.clone({ body });
    }
  
    private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
      const jsonResponse: GroupeIngredient[] = res.body;
      const body: GroupeIngredient[] = [];
      for (let i = 0; i < jsonResponse.length; i++) {
        body.push(this.convertItemFromServer(jsonResponse[i]));
      }
      return res.clone({ body });
    }
  
    /**
     * Convert a returned JSON object to IGroupeIngredient.
     */
    private convertItemFromServer(groupeIngredient: GroupeIngredient): GroupeIngredient {
      const copy: GroupeIngredient = Object.assign({}, groupeIngredient, {});
      return copy;
    }
  /**
   * Convert a IGroupeIngredient to a JSON which can be sent to the server.
   */
  private convert(groupeIngredient: GroupeIngredient): GroupeIngredient {
    const copy: GroupeIngredient = Object.assign({}, groupeIngredient, {});
    
    return copy;
  }
}
