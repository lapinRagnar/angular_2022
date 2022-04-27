import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {
    
  }

}
