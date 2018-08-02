import {Observable} from "rxjs/Observable";
import {BaseApiService} from "../core/baseApi.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Event} from "../entity/event.entity";

@Injectable()
export class EventService extends BaseApiService{
  constructor(public http:HttpClient){
    super(http);
  }

  addEvent(event: Event):Observable<Event>{
    return this.post('events', event);
  }
  getEvents():Observable<Event[]>{
    return this.get('events');
  }
}
