import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

import {Category} from "../../../shared/entity/category.entity";
import {Event} from "../../../shared/entity/event.entity";
import {DatePipe} from "@angular/common";
import {BillService} from "../../../shared/service/bill.service";
import {EventService} from "../../../shared/service/event.service";
import {Bill} from "../../../shared/entity/bill.entity";
import {Message} from "../../../shared/entity/message.entity";
@Component({
  selector: 'hf-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() categories:Category[]=[] ;

   message:Message;

  types = [
    {type:"income", label:"Доход"},
    {type:"outcome", label:"Расход"}
    ]
  constructor(
    private billService: BillService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.message = new Message('success', '');
  }
  onSubmit(form:NgForm){
    let{type, amount, category, description} = form.value;
    const date = new DatePipe('en-US').transform(Date.now());
    const event = new Event(type, amount, category, date, description);

    this.billService.getBill().subscribe((bill:Bill)=>{
      let value = 0;
      if (type === 'outcome'){
        if (amount > bill.value){
          window.setTimeout(this.showMessage(`Не хватает ${amount-bill.value}`, "danger"), 3000);
        }else{
          value = bill.value - amount;
        }
      }else {
        value = bill.value + amount;
      }
      if(amount <= bill.value || type === 'income'){
        this.billService.updateBill({value: value, currency:bill.currency}).mergeMap(()=>this.eventService.addEvent(event))
          .subscribe(()=>{
            window.setTimeout(this.showMessage(`На вашем счету ${value}`, "success"), 3000);
            form.reset();
            form.setValue({
              amount:'1',
              description: '',
              category:'1',
              type:'outcome'
            })
          })
      }

      });
    }
    showMessage(text:string, type:string){
      this.message.text=text;
      this.message.type=type;
    }
  }

