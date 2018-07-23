import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {User} from "../entity/user.entity";

@Injectable()
export class UserService{
  constructor(private http: HttpClient){
  }

  getUserByEmail(email:string):Observable<User>{
    return this.http.get(`http://localhost:3000/users?email=${email}`).map((user:User[]) => user[0]);
  }

  createUser(user: User):Observable<any>{
    return this.http.post(`http://localhost:3000/users`, user);
  }
}
