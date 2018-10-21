import { Component, OnInit } from '@angular/core';
import {Bill} from "../../shared/entity/bill.entity";
import {Observable} from "rxjs/Observable";
import {BillService} from "../../shared/service/bill.service";
import {UserService} from "../../shared/service/user.service";


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

  constructor(private billService:BillService, private userService:UserService) { }

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
      this.billService.getCurrency()
        .subscribe((curr:any)=>{
        this.currency = curr;
        this.isLoaded = true;
      });
  }
  calcCurrency(bill:Bill){
    this.euro = bill.value/this.currency.rates['RUB'];
    this.dollar = this.euro*this.currency.rates['USD'];
  }
  onBillChanged(bill:Bill){
    this.bill = bill;
    this.calcCurrency(bill);
  }
  testUser(){
    this.userService.getAll().subscribe((data:any[])=>{
      data.forEach(e=>console.log(e));
    })
  }
}
