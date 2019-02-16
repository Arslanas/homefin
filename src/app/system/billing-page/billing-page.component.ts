import { Component, OnInit } from '@angular/core';
import {Bill} from "../../shared/entity/bill.entity";
import {Observable} from "rxjs/Observable";
import {BillService} from "../../shared/service/bill.service";
import {UserService} from "../../shared/service/user.service";
import {CurrencyHF} from "../../shared/entity/appEntity/CurrencyHF";


@Component({
  selector: 'hf-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {

  bill:Bill;
  currency:any;
  isLoaded = false;
  currencyValue: CurrencyHF;

  constructor(private billService:BillService, private userService:UserService) { }

  ngOnInit() {
    Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
      ).subscribe((data:[Bill,any])=>{
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
      this.currencyValue = new CurrencyHF();
      this.calcCurrency();
    });
  }
  onRefresh(){
    this.isLoaded = false;
      this.billService.getCurrency()
        .subscribe((curr:any)=>{
        this.currency = curr;
        this.isLoaded = true;
      });
  }
  calcCurrency(){
    this.currencyValue.dollarCurrency = this.currency.rates['RUB'];
    this.currencyValue.euroCurrency = this.currency.rates['RUB']/this.currency.rates['EUR'];
    this.currencyValue.dollarTotal = this.bill.value/this.currencyValue.dollarCurrency;
    this.currencyValue.euroTotal = this.bill.value/this.currencyValue.euroCurrency;
    this.currencyValue.date = new Date(this.currency.timestamp*1000);
  }
  onBillChanged(bill:Bill){
    this.bill = bill;
    this.calcCurrency();
  }
  testUser(){
    this.userService.getAll().subscribe((data:any[])=>{
      data.forEach(e=>console.log(e));
    })
  }
}
