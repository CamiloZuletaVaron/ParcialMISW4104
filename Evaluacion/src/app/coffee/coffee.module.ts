import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';


@NgModule({
  declarations: [
    CoffeeComponent,
    ListCoffeeComponent
  ],
  exports: [
    CoffeeComponent,
    ListCoffeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoffeeModule { }
