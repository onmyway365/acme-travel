import { Currency } from './../view-models/currency.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: Currency[] = [
    {value: 'US Dollar', viewValue: 'USD'},
    {value: 'SA Rand', viewValue: 'ZAR'}
  ];

  selectedCurrency: any;

  constructor() { }

  ngOnInit() {
    this.selectedCurrency = this.currencies[0].value;
  }

  onSelectCurrency(event: any) {
   console.log(event);
  }

}
