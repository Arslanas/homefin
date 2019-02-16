import {Component, Input, OnInit} from '@angular/core';
import {CurrencyHF} from "../../../shared/entity/appEntity/CurrencyHF";

@Component({
  selector: 'hf-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {
  @Input() currencyValue: CurrencyHF;

  constructor() { }

  ngOnInit() {

  }

}
