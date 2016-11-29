import { Component, Output, EventEmitter } from '@angular/core';
import { ProductI } from '../../models/product.model'

/*
  Generated class for the AddForm component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'add-form',
  templateUrl: 'add-form.html'
})
export class AddFormComponent {
  @Output() action = new EventEmitter();
  newProduct:ProductI = {name:'',price:0}

  constructor() {
    
  }

  add(){
    this.action.emit(this.newProduct)
    this.newProduct = {name:'',price:0}
  }

}
