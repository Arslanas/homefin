import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Bill} from "../entity/bill.entity";
import {BaseApiServerService} from "../core/baseApiServer.service";

@Injectable()
export class BillService extends BaseApiServerService{
  constructor(public http:HttpClient){
    super(http);
  }

  getBill(){
    return this.get('bill');
  }
  updateBill(bill:Bill){
    const billWithID = {id:1, value: bill.value, currency: bill.currency};
    return this.put("bill", billWithID);
  }
  createBill(bill:Bill){
    return this.post("bill", bill);
  }
  getCurrency(){
    return this.http.get(`https://data.fixer.io/api/latest?access_key=045c429915bce5ab8772387f75420c28`);
  }
}
