import { Component, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IMember } from '../_models/member';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

export const TOKEN_NAME: string = 'token';
export const CONNECTED_USER: string = 'user';


@Injectable()
export class SigninService {
  private url: string = 'auth/sign-in';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }
  setSession(authResult) {

  }
  login(login: string, password: string): Observable<IMember> {
    this.logout();
    return this.http.post<IMember>(this.url, { login, password }, { headers: this.headers })
      .do(data => {
        this.setUser(data);
        this.setToken(data.token);
      }).catch(this.handleError);
  }
  logout() {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(CONNECTED_USER);
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }
  setUser(user: IMember): void {
    localStorage.setItem(CONNECTED_USER, JSON.stringify(user));
  }
  getUser(): IMember {
    return JSON.parse(localStorage.getItem(CONNECTED_USER));
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
    return Observable.throw(`{ "status" : ${err.status} , "message" : "${err.message}" }`);
  }
} 