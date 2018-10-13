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
  dollar:number;
  euro:number;

  constructor(private billService:BillService) { }

  ngOnInit() {
    Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
      ).subscribe((data:[Bill,any])=>{
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
      this.calcCurrency(this.bill);
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
  calcCurrency(bill:Bill){
    console.log(this.currency.rates['RUB']);
    console.log(this.currency.rates['USD']);
    console.log(this.currency.rates['EUR']);
    this.euro = bill.value/this.currency.rates['RUB'];
    this.dollar = this.euro*this.currency.rates['USD'];
  }
  onBillChanged(bill:Bill){
    this.bill = bill;
    this.calcCurrency(bill);
  }
}
