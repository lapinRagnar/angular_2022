import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: any

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    console.log("ajouter le panier");
    this.shoppingCart.addProduct(product)
  }

}
