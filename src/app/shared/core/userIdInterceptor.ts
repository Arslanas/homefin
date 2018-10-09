import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {HttpEvent} from "@angular/common/http/src/response";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Event} from "../entity/event.entity";
import {Category} from "../entity/category.entity";
import {User} from "../entity/user.entity";

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let body = req.body;
    const userID = JSON.parse(window.localStorage.getItem('user'));
    if (body && userID) {
      body.userId = userID.id;
      let newReq = req.clone({body: body});
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
