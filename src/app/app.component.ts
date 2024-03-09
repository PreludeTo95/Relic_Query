import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PrimeItems {
  name: string;
  price: string;
  rarity: string;
}

const primeItems: PrimeItems[] = [
  {name: 'Soma Prime Barrel', price: '25', rarity: 'common'},
  {name: 'Soma Prime Stock', price: '20', rarity: 'common'},
  {name: 'Soma Prime Reciever', price: '50', rarity: 'common'},
  {name: 'Soma Prime Blueprint', price: '5', rarity: 'uncommon'},
  {name: 'Trinity Prime Neuroptics', price: '100', rarity: 'uncommon'},
  {name: 'Trinity Prime Systems', price: '15', rarity: 'rare'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Relic_Query';
  displayedColumns: string[] = ['name', 'price'];
  dataSource = primeItems;

  itemFormControl: FormControl = new FormControl(null)

  
}
