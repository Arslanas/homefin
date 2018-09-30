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

  getUserByEmail(email:string):Observable<User>{
    return this.get(`users?email=${email}`).map((user:User[]) => user[0]);
  }
  getUserByUsername(username:string):Observable<User>{
    return this.get(`users?username=${username}`).map((user:User[]) => user[0]);
  }

  createUser(user: User):Observable<any>{
    return this.post(`users`, user);
  }
}
