import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  apiUrl = environment.apiUrl; // Define your API URL in environment.ts

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product);
  }
}
