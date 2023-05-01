import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoffeeService } from './coffee.service';
import Coffee from '../model/coffee';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoffeeService]
    });

    service = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve coffees from the API via GET', () => {
    const mockCoffees: Coffee[] = [
      { id: 1, nombre: 'Coffee 1', tipo: 'blend', region: 'South America', sabor: 'Strong', altura: 1200, imagen: 'https://example.com/coffee1.png' },
      { id: 2, nombre: 'Coffee 2', tipo: 'origen', region: 'Africa', sabor: 'Fruity', altura: 1000, imagen: 'https://example.com/coffee2.png' }
    ];

    service.getCoffee().subscribe(coffees => {
      expect(coffees.length).toBe(2);
      expect(coffees).toEqual(mockCoffees);
    });

    const request = httpMock.expectOne(service['url']);
    expect(request.request.method).toBe('GET');
    request.flush(mockCoffees);
  });
});
