import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service'
import Coffee from '../model/coffee';

@Component({
  selector: 'app-list-coffee',
  templateUrl: './list-coffee.component.html',
  styleUrls: ['./list-coffee.component.scss'],
  providers: [CoffeeService]
})
export class ListCoffeeComponent implements OnInit{
  coffees: Coffee[] = [];
  origin: number = 0;
  blend: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeService.getCoffee().subscribe(resp => {
      this.coffees = resp;
      this.origin = resp.filter( c => c.tipo != "Blend").length;
      this.blend = resp.filter( c => c.tipo == "Blend").length;
    })
  }
}
