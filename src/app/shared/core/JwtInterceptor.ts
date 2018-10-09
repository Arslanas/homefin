import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import {TokenStorage} from "./tokenStorage.util";
import {HttpEvent} from "@angular/common/http/src/response";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public token: TokenStorage, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const regexp = new RegExp('.data').test(req.url);
    if (regexp){
        return next.handle(authReq);
    }
    if (this.token.getToken() != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, this.token.getToken())});
    }
    return next.handle(authReq).do(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      }
    );
  }

}
