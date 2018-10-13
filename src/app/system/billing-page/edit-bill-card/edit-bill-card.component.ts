import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Category} from "../../../shared/entity/category.entity";
import {Bill} from "../../../shared/entity/bill.entity";
import {BillService} from "../../../shared/service/bill.service";

@Component({
  selector: 'hf-edit-bill-card',
  templateUrl: './edit-bill-card.component.html',
  styleUrls: ['./edit-bill-card.component.scss']
})
export class EditBillCardComponent implements OnInit {

  @Input() bill:Bill;
  @Output() emitter = new EventEmitter<Bill>();
  constructor( private billService: BillService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const {bill} = form.value;
    const newBill = new Bill(bill, "RUB");
    this.billService.updateBill(newBill).subscribe(bill=>{
      this.emitter.emit(bill);
    });
  }
}
