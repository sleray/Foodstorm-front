import { Component, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMember } from '../core/member';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME: string = 'token';


@Injectable()
export class SigninService {
  private url: string = 'auth/sign-in';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private badAuth: boolean = false;
  private errorServeur: boolean = false;

  connectedUser: IMember;

  constructor(private http: HttpClient) {
  }
  setSession(authResult) {

  }
  login(login: string, password: string) {
    this.logout();
    return this.http.post<IMember>(this.url, { login, password }, { headers: this.headers })
      .toPromise().then(res => {
        this.connectedUser = res;
        this.setToken(this.connectedUser.token);
      }).catch(res => {
        if (res.status != 200) {
          if (res.status == 404) {
            this.badAuth = true;
          } else {
            this.errorServeur = true;
          }
        }
        console.log(res);
      });
  }
  logout() {    
    this.badAuth = false;
    this.errorServeur = false;
    localStorage.removeItem(TOKEN_NAME);
    this.connectedUser = undefined;
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;
    console.log('token :' + token);
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
  isBadAuth(): boolean {
    return this.badAuth;
  }
  isErrorServeur(): boolean {
    return this.errorServeur;
  }
  getConnectedUser() {
    return this.connectedUser;
  }
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }
} 