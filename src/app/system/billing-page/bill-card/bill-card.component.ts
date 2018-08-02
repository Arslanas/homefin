import {Component, Input, OnInit} from '@angular/core';
import {BillService} from "../../../shared/service/bill.service";
import {Bill} from "../../../shared/entity/bill.entity";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'hf-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

 @Input() bill:Bill;
 @Input() currency:any;

 dollar: number;
 euro: number;

  constructor() { }

  ngOnInit() {
    this.euro = this.bill.value/this.currency.rates['RUB'];
    this.dollar = this.euro*this.currency.rates['USD'];
  }


}
