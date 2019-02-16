import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hf-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  @Input() dollar: number;
  @Input() euro: number;
  modifiedCurrency:any;
  currencies: string[] = ["USD", "EUR"];

  constructor() { }

  ngOnInit() {

  }

}
