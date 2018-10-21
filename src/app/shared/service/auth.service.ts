import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user.entity";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  url: string = 'http://localhost:8080/';
//  url:string = 'https://homefin-server.herokuapp.com/';

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};
    return this.http.post(this.getUrl('signin'), credentials);
  }

  register(user: User): Observable<any> {
    const credentials = {username: user.username, password: user.password, name: user.name, email: user.email};
    return this.http.post(this.getUrl('signup'), credentials);
  }

  logout() {
    window.localStorage.clear();
  }

  isAuthenticated() {
    const token = localStorage.getItem('AuthToken');
    if (token && token.startsWith('Bearer')){
      return true;
    }else {
      false
    }
  }
  usernameExists(username): Observable<any>{
    return this.http.get(this.getUrl('usernameExists'), {params:{'username':username}})
  }
  emailExists(email): Observable<any>{
    return this.http.get(this.getUrl('emailExists'), {params:{'email':email}})
  }
  private getUrl(endpoint: string): string {
    return this.url + 'auth/' + endpoint;
  }
}
