import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hf-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  modifiedCurrency:any;
  currencies: string[] = ["USD", "EUR"];

  constructor() { }

  ngOnInit() {
    this.modifiedCurrency = JSON.parse(JSON.stringify(this.currency));
    this.modifiedCurrency.rates['USD'] = this.modifiedCurrency.rates['RUB'] / this.modifiedCurrency.rates['USD'];
    const eur = this.modifiedCurrency.rates['RUB'];
    this.modifiedCurrency.rates['EUR'] = eur;
    this.modifiedCurrency.rates['RUB'] = 1;
  }

}
