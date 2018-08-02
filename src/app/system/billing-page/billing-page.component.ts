import { Component, OnInit } from '@angular/core';
import {Bill} from "../../shared/entity/bill.entity";
import {Observable} from "rxjs/Observable";
import {BillService} from "../../shared/service/bill.service";


@Component({
  selector: 'hf-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {

  bill:Bill;
  currency:any;
  isLoaded = false;

  constructor(private billService:BillService) { }

  ngOnInit() {
    Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
      ).subscribe((data:[Bill,any])=>{
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }
  onRefresh(){
    this.isLoaded = false;
      this.billService.getCurrency().delay(2000)
        .subscribe((curr:any)=>{
        this.currency = curr;
        console.log(this.currency);
        this.isLoaded = true;
      });
  }
}
