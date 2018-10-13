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
 @Input() dollar: number;
 @Input() euro: number;

  constructor() { }

  ngOnInit() {
  }


}
