import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../../shared/service/event.service";
import {CategoryService} from "../../../shared/service/category.service";
import {Event} from "../../../shared/entity/event.entity";
import {Category} from "../../../shared/entity/category.entity";

@Component({
  selector: 'hf-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {

  event: Event;
  category: Category;
  id: number;
  isLoaded = false;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private categoryService: CategoryService) { }

  ngOnInit() {
      this.route.params.
      mergeMap(params => {
        this.id = (params[`id`]);
        return this.eventService.getEventById(this.id)}).
        mergeMap((event:Event)=> {
          this.event = event;
          return this.categoryService.getCategoryById(+event.category)
        }).
        subscribe((category:Category)=>{
          this.category = category;
          this.isLoaded = true;
      })
  }

}
