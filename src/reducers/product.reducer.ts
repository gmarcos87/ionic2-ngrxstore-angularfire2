import {ActionReducer, Action} from '@ngrx/store';  
import { ProductActions } from '../actions/product.actions'

import { ProductI } from '../models/product.model'


export const ProductReducer: ActionReducer<ProductI[]> = (state: ProductI[] = [], action: Action) => {
    if(action && action.type){            
        switch(action.type) {
            case ProductActions.LOAD_PRODUCT_SUCCESS:
                return action.payload;
            case ProductActions.ADD_UPDATE_PRODUCT_SUCCESS:
                var exists = state.find(product => product.$key === action.payload.$key);               
                if (exists) {
                    // UPDATE
                    return state.map(product => {
                        return product.$key === action.payload.$key ? Object.assign({}, product, action.payload) : product;
                    });
                } 
                else {
                    // ADD
                    return [...state, Object.assign({}, action.payload)];
                }
            case ProductActions.DELETE_PRODUCT_SUCCESS:
                return state.filter(product => product.$key !== action.payload);
            default:
                return state;
        };
    }
}
