import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../../shared/entity/event.entity";
import {Category} from "../../../shared/entity/category.entity";

@Component({
  selector: 'hf-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: Category[];
  @Input() events: Event[];
  @Output() eventDeleted = new EventEmitter<Event>();
  searchValue = "";
  placeHolder = "Сумма";
  searchField = "amount";

  constructor() {
  }

  ngOnInit() {
    this.events.forEach(e => e.categoryName = this.categories.find(c => c.id == +e.category).name);
  }

  getEventClass(e: Event) {
    return {
      label: true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income',
    }
  }
  changeCriteria(criteria){
    const typesMap = {
      "amount": "Сумма",
      "category": "Категория",
      "date": "Дата",
      "type": "Тип",
    };
    this.placeHolder = typesMap[criteria];
    this.searchField  = criteria;
  }
  deleteEvent(event){
    this.eventDeleted.emit(event);
  }
}
