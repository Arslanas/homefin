import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../shared/entity/category.entity";
import {Event} from "../../../shared/entity/event.entity";
import {CategoryService} from "../../../shared/service/category.service";
import {EventService} from "../../../shared/service/event.service";
import {Observable} from "rxjs/Observable";
import {Bill} from "../../../shared/entity/bill.entity";

@Component({
  selector: 'hf-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {


  view = [450,300];
  @Input() chartData;
  constructor() { }

  ngOnInit() {
  }

}
