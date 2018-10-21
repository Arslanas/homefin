import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Event} from "../entity/event.entity";
import {BaseApiServerService} from "../core/baseApiServer.service";

@Injectable()
export class EventService extends BaseApiServerService {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: Event): Observable<Event> {
    return this.post('events', event);
  }

  getEvents(): Observable<Event[]> {
    return this.get('events');
  }

  getEventById(id: number): Observable<Event> {
    return this.get(`events/${id}`);
  }
  deleteEvent(id:number): Observable<any> {
    return this.delete(`events/${id}`);
  }
}
