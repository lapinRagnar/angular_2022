import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: any = []

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  getShoppingCart() {
    this.items = this.shoppingCart.getShoppingCartItems()
  }

}
