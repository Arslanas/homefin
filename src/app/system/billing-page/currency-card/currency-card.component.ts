import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hf-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  currencies: string[] = ["RUB", "USD"];

  constructor() { }

  ngOnInit() {
  }

}
