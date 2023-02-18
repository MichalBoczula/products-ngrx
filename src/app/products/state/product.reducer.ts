import { createReducer, on } from "@ngrx/store";
import * as ProductAction from './product.actions';
import { ProductState } from "./product.state";

export interface ProductReducerState {
    products: ProductState
};

const initialState: ProductState = {
    showProductCode: false,
    currentProductId: 0,
    currentProduct: undefined,
    products: [],
    isEditMode: false,
    error: ''
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
            currentProduct: undefined
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
    }),
    on(ProductAction.setIsEditModeOnFalse, (state): ProductState => {
        return {
            ...state,
            isEditMode: false
        }
    }),
    on(ProductAction.setIsEditModeOnTrue, (state): ProductState => {
        return {
            ...state,
            isEditMode: true
        }
    }),
    on(ProductAction.setCurrentProductId, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.productId
        }
    }),
    on(ProductAction.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
            error: ''
        }
    }),
    on(ProductAction.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state,
            products: [],
            error: action.error
        }
    })
);