import { Injectable } from '@angular/core';
import { IIngredient } from '../administration/ingredient/ingredient';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class MenuService {

  private menuUrl = 'menu/random';

    constructor(private http:HttpClient) { }

  getRandomMenu(): Observable<IIngredient[]>{
    return this.http.get<IIngredient[]>(this.menuUrl)
      .do(data => console.log('randomMenu' + JSON.stringify(data)))
      .catch(this.handleError);

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
