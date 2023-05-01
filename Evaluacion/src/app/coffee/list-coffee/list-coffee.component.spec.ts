import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListCoffeeComponent } from './list-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from '../service/coffee.service';
import Coffee from '../model/coffee';

describe('ListCoffeeComponent', () => {
  let component: ListCoffeeComponent;
  let fixture: ComponentFixture<ListCoffeeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListCoffeeComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCoffeeComponent);
    component = fixture.componentInstance;

    var coffeeTypes = [
      'blend',
      'origen'
    ];
    var randomNumber = Math.floor(Math.random() * coffeeTypes.length);

    for(let i = 0; i < 10; i++) {
      const coffee: Coffee = {
        id: 1234 + i,
        nombre: faker.name.firstName(),
        tipo: coffeeTypes[randomNumber],
        region: faker.locale,
        sabor: faker.random.words(),
        altura: Math.floor(Math.random() * 5),
        imagen: faker.image.imageUrl()
      };

      component.coffees.push(coffee);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 theader-coffee', () => {
    expect(debug.queryAll(By.css('.theader-coffee'))).toHaveSize(10)
  });

  it('should class theader-coffee be equal to coffee id', () => {

    debug.queryAll(By.css('.theader-coffee')).forEach((el, i) => {
      expect(el.nativeElement.textContent).toEqual(component.coffees[i].id.toString());
    });
  });

});
