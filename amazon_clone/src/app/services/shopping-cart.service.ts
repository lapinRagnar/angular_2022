import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartItems: any = []

  constructor() { }

  addProduct = (product: any) => {
    console.log("ajouter au localstorage", product);
    let items = this.getShoppingCartItems()

    if (items) {
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    } else {
      this.shoppingCartItems.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCartItems))
    }
  }

  getShoppingCartItems() {
    let items: any = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }

  getCartLength() {
    let items = this.getShoppingCartItems()
    return items ? this.getShoppingCartItems().length : 0
  }

  getTotal() {
    let items = this.getShoppingCartItems()
    return (items?.reduce((acc: any, item: any) => acc + item.price, 0) ).toFixed(2)
  }

}
