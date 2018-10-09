import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user.entity";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService{

  constructor( public http: HttpClient ){}
  private isAuthenticated = false;

    login(username: string, password: string):Observable<any> {
    const credentials = {username: username, password: password};
    return  this.http.post('http://localhost:8080/auth/signin', credentials);
  }
  register(user:User):Observable<any>{
    const credentials = {username: user.name, password: user.password, name: user.name, email: user.email};
    return this.http.post('http://localhost:8080/auth/signup', credentials);
  }
  logout(){
    this.isAuthenticated = false;
    window.localStorage.clear();
  }
  isLoggedIn(){
    return this.isAuthenticated;
  }
}
