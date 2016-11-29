
import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';
import {ProductI} from '../models/product.model';


@Injectable()
export class ProductActions {

    static ADD_PRODUCT = 'ADD_PRODUCT';
    addProduct(product: ProductI): Action {
        return {
            type: ProductActions.ADD_PRODUCT,
            payload: product
        }
    }

    static UPDATE_PRODUCT = 'UPDATE_PRODUCT';
    updateProduct(product: ProductI): Action {
        return {
            type: ProductActions.UPDATE_PRODUCT,
            payload: product
        }
    }

    static DELETE_PRODUCT = 'DELETE_PRODUCT';
    deleteProduct(product: ProductI): Action {
        return {
            type: ProductActions.DELETE_PRODUCT,
            payload: product
        }
    }

    static LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';  
    loadProductSuccess(products: ProductI[]): Action {
        return {
            type: ProductActions.LOAD_PRODUCT_SUCCESS,
            payload: products
        }
    }

    static ADD_UPDATE_PRODUCT_SUCCESS = 'ADD_UPDATE_PRODUCT_SUCCESS';  
    addUpdateProductSuccess(product: ProductI): Action { 
        return {
            type: ProductActions.ADD_UPDATE_PRODUCT_SUCCESS,
            payload: product
        }
    }

    static DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';  
    deleteProductSuccess(id: string): Action {  
        return {
            type: ProductActions.DELETE_PRODUCT_SUCCESS,
            payload: id
        }
    }
}