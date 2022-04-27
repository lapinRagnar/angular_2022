import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {


  @Input() checkout_products: any
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    console.log("on est dans checkout component", this.checkout_products);
  }


  removeItem(product: any) {
    console.log("effacer un produit!");
    this.shoppingCartService.removeItem(product)
    this.deleteEvent.emit(product)
  }

  

}
