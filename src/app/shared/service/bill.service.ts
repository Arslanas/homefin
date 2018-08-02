import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Bill} from "../entity/bill.entity";
import {BaseApiService} from "../core/baseApi.service";

@Injectable()
export class BillService extends BaseApiService{
  constructor(public http:HttpClient){
    super(http);
  }

  getBill():Observable<Bill>{
    return this.get('bill');
  }
  updateBill(bill:Bill):Observable<Bill>{
    return this.put("bill", bill)
  }
  getCurrency():Observable<any>{
    return this.http.get(`http://data.fixer.io/api/latest?access_key=045c429915bce5ab8772387f75420c28`);
  }
}
