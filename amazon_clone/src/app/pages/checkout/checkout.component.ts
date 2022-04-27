import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: any = []

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    console.log("quantiqué produit selectionné! ",this.shoppingCart.getCartLength().length);
    this.getShoppingCart()
    
  }

  getShoppingCart() {
    this.items = this.shoppingCart.getShoppingCartItems()
  }

}
