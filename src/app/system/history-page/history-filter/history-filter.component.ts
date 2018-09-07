import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'hf-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent implements OnInit {

  @Output() filterClosed = new EventEmitter<any>();
  @Output() filterApplied = new EventEmitter<any>();
  @Input() categories;

  selectedPeriod = 'd';
  selectedCategories=[];
  selectedTypes=[];

  timePeriods = [
      {'type':'d', 'label':'День'},
      {'type':'w', 'label':'Неделя'},
      {'type':'m', 'label':'Месяц'}
    ];
  eventType = [
    {'type':'income', 'label':'Доход'},
    {'type':'outcome', 'label':'Расход'}
  ];


  constructor() { }

  ngOnInit() {
  }

  filterClose(){
    this.selectedPeriod = 'd';
    this.selectedCategories=[];
    this.selectedTypes=[];
    this.filterClosed.emit();
  }

  calculateInputParameters(field:string, checked: boolean, value: number){
    if(checked) {
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    }else{
      this[field]= this[field].filter(e=> e !== value);
    }
  }

  handlePeriodChange({value}){
    this.selectedPeriod = value;
  }

  handleChangeType({checked, value}){
    this.calculateInputParameters('selectedTypes', checked, value);
  }
  handleChangeCategory({checked, value}){
    this.calculateInputParameters('selectedCategories', checked, value);
  }

  filterApply(){
    this.filterApplied.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod
    })
  }
}
