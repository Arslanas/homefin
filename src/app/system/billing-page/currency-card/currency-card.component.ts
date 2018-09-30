import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hf-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  currencies: string[] = ["USD", "EUR"];

  constructor() { }

  ngOnInit() {
    this.currency.rates['USD'] = this.currency.rates['RUB'] / this.currency.rates['USD'];
    const eur = this.currency.rates['RUB'];
    this.currency.rates['EUR'] = eur;
    this.currency.rates['RUB'] = 1;
  }

}
