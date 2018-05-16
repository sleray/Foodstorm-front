import { Injectable } from '@angular/core';
import { SigninService } from './signin.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment } from '../../environments/environment'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService : SigninService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var urls = environment.backUrl +'/'+request.url
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      },
      url : urls
    });
    console.log(request)
    return next.handle(request);
  }
}
