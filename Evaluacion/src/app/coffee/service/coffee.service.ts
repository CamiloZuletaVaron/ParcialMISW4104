import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Coffee from '../model/coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private url: string = environment.CoffeeBaseUrl;

  constructor(private http: HttpClient) { }

  getCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.url);
  }
}
