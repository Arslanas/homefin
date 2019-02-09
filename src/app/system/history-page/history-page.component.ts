import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Category} from "../../shared/entity/category.entity";
import {CategoryService} from "../../shared/service/category.service";
import {EventService} from "../../shared/service/event.service";
import {Observable} from "rxjs/Observable";
import {Event} from "../../shared/entity/event.entity";

@Component({
  selector: 'hf-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  categories:Category[];
  events:Event[];
  filteredEvents: Event[];
  isLoaded = false;
  chartData = [];
  display = 'none';
  isSearchReady = false;

  constructor(private categoryService: CategoryService,
              private eventService: EventService
  ) { }

  ngOnInit() {
    Observable.combineLatest(
      this.eventService.getEvents(),
      this.categoryService.getCategories()
    ).subscribe((data:[Event[], Category[]])=>{
      this.events = data[0];
      this.categories = data[1];
      this.setOrigEvents();
      this.isLoaded = true;
      this.calculateChartData();

    })
  }

  private setOrigEvents(){
    this.filteredEvents = this.events.slice();
  }
  private calculateChartData():void{
    this.chartData=[];
    this.categories.forEach(cat=> {
      const catEvents = this.filteredEvents.filter(e=> +e.category == cat.id && e.type === 'outcome');
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, e)=>  { total += e.amount; return total; }, 0)
      })
    })
  }
  onFilterClick(){
    this.display = 'block';
  }
  onFilterClosed(){
    this.setOrigEvents();
    this.calculateChartData();
    this.display = 'none';
  }
  onFilterApply(filteredData){
    this.setOrigEvents();
    if(filteredData.types.length > 0 && filteredData.categories.length == 0){
      this.filteredEvents = this.filteredEvents.
      filter(e=> filteredData.types.indexOf(e.type) !== -1);
    }
    if (filteredData.types.length == 0 && filteredData.categories.length > 0){
      this.filteredEvents = this.filteredEvents.
      filter(e=> filteredData.categories.indexOf(e.category.toString()) !== -1);
    }
    if (filteredData.types.length > 0 && filteredData.categories.length > 0){
      this.filteredEvents = this.filteredEvents.
      filter(e=> filteredData.types.indexOf(e.type) !== -1).
      filter(e=> filteredData.categories.indexOf(e.category.toString()) !== -1);
    }
    this.calculateChartData();
    this.display = 'none';
  }
  onEventDeleted(event:Event){
    this.eventService.deleteEvent(event.id).subscribe(()=>{
      this.events = this.events.filter(e => e.id != event.id);
      this.filteredEvents = this.filteredEvents.filter(e=> e.id != event.id);
      this.calculateChartData();
    })
  }
}
