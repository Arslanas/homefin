import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BaseApiServerService{
  private host:string = "http://localhost:8080/";
//  private host:string = "https://homefin-server.herokuapp.com/";

  constructor(public http:HttpClient){}

  private getUrl(url:string=''):string{
    return this.host+url;
  }
  get(url:string = ''):Observable<any>{
    return this.http.get(this.getUrl(url));
  }
  post(url:string = '', data:any = {}):Observable<any>{
    return this.http.post(this.getUrl(url), data);
  }
  put(url:string = '', data:any = {}):Observable<any>{
    return this.http.put(this.getUrl(url), data);
  }
  delete(url:string = ''):Observable<any>{
    return this.http.delete(this.getUrl(url));
  }
}
