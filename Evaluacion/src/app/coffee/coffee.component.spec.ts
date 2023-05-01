import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CoffeeComponent } from './coffee.component';
import { ListCoffeeComponent } from './list-coffee/list-coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from './service/coffee.service';
import Coffee from './model/coffee';

describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListCoffeeComponent, CoffeeComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
