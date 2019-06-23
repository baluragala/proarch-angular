import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pro-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;
  cart: Array<Product> = new Array();

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        title: 'iphone',
        price: 1000,
        stock: 20,
        features: [{ id: 1, description: 'fullscreen' }]
      },
      {
        id: 2,
        title: 'iphone x',
        price: 1000,
        stock: 0,
        features: [{ id: 1, description: 'fullscreen' }]
      },
      {
        id: 3,
        title: 'note 10',
        price: 1000,
        stock: 20,
        features: [{ id: 1, description: 'fullscreen' }]
      }
    ]
  }


  handleAddToCart(p: Product) {
    this.cart.push(p);
  }
}
