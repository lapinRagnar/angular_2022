import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(" les produits ajoutés ...",this.shoppingCart.getCartLength());
  }

  

}
