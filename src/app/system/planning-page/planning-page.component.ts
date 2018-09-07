import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../shared/service/category.service";
import {EventService} from "../../shared/service/event.service";
import {BillService} from "../../shared/service/bill.service";
import {Bill} from "../../shared/entity/bill.entity";
import {Category} from "../../shared/entity/category.entity";
import {Observable} from "rxjs/Observable";
import {Event} from "../../shared/entity/event.entity";

@Component({
  selector: 'hf-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {

  bill:Bill;
  categories:Category[];
  events:Event[];
  isFalse = false;

  constructor(private categoryService: CategoryService,
              private eventService: EventService,
              private billService: BillService) {
  }

  ngOnInit() {
    Observable.combineLatest(
      this.eventService.getEvents(),
      this.billService.getBill(),
      this.categoryService.getCategories()
    ).subscribe((data:[Event[], Bill, Category[]])=>{
        this.events = data[0];
        this.bill = data[1];
        this.categories = data[2];
        this.isFalse = true;
    })
  }

  getPriceByCategory(category:Category){
    const eventsForCategory = this.events.filter(e=> +e.category === category.id && e.type ==='outcome');
    return eventsForCategory.reduce((total, e)=>  { total += e.amount; return total; }, 0);
  }
  getPercent(category:Category, amount:number){
    const percent = (100*amount)/category.capacity ;
    return percent > 100 ? 100 : percent;
  }
  getPercentageColor(percent: number){
    return percent < 50 ? 'success' : percent < 90 ? 'warning' : 'danger';
  }

}
