import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  addProduct = (product: any) => {
    console.log("ajouter au localstorage", product);
    localStorage.setItem('shopping_cart', JSON.stringify(product))
  }

}
