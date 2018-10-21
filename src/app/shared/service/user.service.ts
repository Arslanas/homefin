import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User} from "../entity/user.entity";
import {BaseApiServerService} from "../core/baseApiServer.service";

@Injectable()
export class UserService extends BaseApiServerService{
  constructor(public http: HttpClient){
    super(http)
  }
  createUser(user: User):Observable<any>{
    return this.post(`users`, user);
  }
  getAll():Observable<any>{
    return this.get(`users`);
  }
}
