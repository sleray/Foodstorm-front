import {Component, Injectable} from '@angular/core'
import { userInfo } from 'os';



@Injectable()
export class SigninService {
 

    connectedUser: string;

   constructor() {
     console.log('signin service started');
   }

   connectionAttemp(login : string) {
    console.log('login called'); 
    
     this.connectedUser = login;

   }

   getConnectedUser() {
     return this.connectedUser;
   }

} 