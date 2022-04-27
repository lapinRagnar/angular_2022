import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsParent : any

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productsService.getProducts().subscribe((result) => {
      console.log(result)
      this.productsParent = result
    })
  }



}
