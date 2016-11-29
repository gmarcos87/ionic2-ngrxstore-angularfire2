import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductI } from '../../models/product.model'

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

  @Input() products: ProductI[]
  @Output() action = new EventEmitter();
  constructor() {
  }

}
