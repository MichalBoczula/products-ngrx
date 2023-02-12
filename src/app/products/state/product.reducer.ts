import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product-model";


export interface State {
    products: ProductState
};

export interface ProductState {
    showProductCode: boolean,
    currentProductId: Number,
    products: Product[]
};

const initialState: ProductState = {
    showProductCode: false,
    currentProductId: 0,
    products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

//composition in encapsulation
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId) => state.products.find(p => p.id === currentProductId)
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const ProductReducer = createReducer<ProductState>(
    initialState,
    on(createAction('Toggle product code'), (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
);