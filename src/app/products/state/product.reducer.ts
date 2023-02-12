import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product-model";
import * as ProductAction from './product.actions';
import { ProductState } from "./product.state";

export interface ProductReducerState {
    products: ProductState
};

const initialState: ProductState = {
    showProductCode: false,
    currentProductId: 0,
    currentProduct: undefined,
    products: []
};

export const ProductReducer = createReducer<ProductState>(
    initialState,
    on(ProductAction.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductAction.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product
        }
    }),
    on(ProductAction.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    }),
    on(ProductAction.initializeNewProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: {
                id: 0,
                productName: '',
                productCode: '',
                description: '',
                price: 0
            }
        }
    })
);