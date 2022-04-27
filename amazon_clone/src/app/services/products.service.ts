import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlApi = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.urlApi)
  }

}
