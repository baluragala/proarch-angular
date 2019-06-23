import { EventEmitter, Output } from '@angular/core';
import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pro-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();

  @Input()
  extras: any

  @Input()
  product: Product;
  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.addToCart.emit(this.product)
  }

  getTitleStyle() {
    return { color: this.product.stock > 0 ? 'green' : 'red' }
  }

}
