import { Component, ChangeDetectionStrategy  } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Store} from '@ngrx/store';  
import {Observable} from 'rxjs/Rx';


import {AppState} from '../../services/app-state';  
import {ProductI} from '../../models/product.model';  

import {ProductActions} from '../../actions/product.actions'
 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  public products: Observable<ProductI[]>
  constructor(
    public navCtrl: NavController,
    public productActions : ProductActions,
    private store: Store<AppState>) {

    this.products = store.select(state => state.products)
  }

  ionViewLoaded() {
    
  }

  add(product){
    this.store.dispatch(
      this.productActions.addProduct(product)
    )
  }

  remove(product){
    this.store.dispatch(
      this.productActions.deleteProduct(product)
    )
  }

}
