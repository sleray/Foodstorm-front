import { Injectable } from '@angular/core';
import { SigninService } from './signin.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'
const PATH: string = "foodstorm-back";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService: SigninService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //check if its a local call or if context needs to be added
    var isLocal = request.headers.get("localJSON")

    var urls = "";
    if (isLocal) {
      console.log("local JSON called");
      urls = request.url
    } else {
      urls = environment.backUrl + '/' + request.url
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      },
      url: urls
    });
    console.log(request)
    return next.handle(request);
  }
}
