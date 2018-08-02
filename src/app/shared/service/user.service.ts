import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User} from "../entity/user.entity";
import {BaseApiService} from "../core/baseApi.service";

@Injectable()
export class UserService extends BaseApiService{
  constructor(public http: HttpClient){
    super(http)
  }

  getUserByEmail(email:string):Observable<User>{
    return this.get(`users?email=${email}`).map((user:User[]) => user[0]);
  }

  createUser(user: User):Observable<any>{
    return this.post(`users`, user);
  }
}
