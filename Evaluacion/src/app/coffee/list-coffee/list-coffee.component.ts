import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service'
import { Coffee } from '../model/coffee';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.scss'],
  providers: [CoffeeService]
})
export class ListCoffeeComponent implements OnInit{
  coffees: Coffee[] = [];
  origen: number = 0;
  blend: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {

  }
}
