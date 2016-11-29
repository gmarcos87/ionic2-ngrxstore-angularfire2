import {Injectable} from '@angular/core';  
import {Effect, toPayload, Actions } from '@ngrx/effects';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'

import {ProductService} from '../providers/product.service';  
import {ProductI} from '../models/product.model';  
import {ProductActions} from '../actions/product.actions';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private fb: ProductService,
        private productActions: ProductActions
    ) {  }


    @Effect() allProduct$ = this.fb.getAll()  
        .map(product => { return this.productActions.loadProductSuccess(product)});

    @Effect()  changedProduct$ = this.fb.getChanges()
        .map(change => {
            if(change.event == 'child_removed'){        
                return this.productActions.deleteProductSuccess(change.product.$key);
            }     
            else {
                return this.productActions.addUpdateProductSuccess(change.product);
            }
        });

    
    @Effect({dispatch: false}) addProduct$ = this.actions$
        .ofType(ProductActions.ADD_PRODUCT)
        .map<ProductI>(toPayload)
        .switchMap(product => Observable.fromPromise(this.fb.add(product)));

    @Effect() updateProducto$ = this.actions$
        .ofType(ProductActions.UPDATE_PRODUCT)
        .map<ProductI>(toPayload)
        .mergeMap(product => this.fb.update(product));

    @Effect({dispatch: false}) deleteProducto$ = this.actions$
        .ofType(ProductActions.DELETE_PRODUCT)
        .map<ProductI>(toPayload)
        .mergeMap(product => this.fb.delete(product));

}