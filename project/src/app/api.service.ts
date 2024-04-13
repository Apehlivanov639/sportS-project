import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProduct(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/product`;

    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Product[]>(url);
  }
}
