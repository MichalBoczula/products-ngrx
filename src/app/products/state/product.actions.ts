import { createAction, props } from "@ngrx/store";
import { Product } from "../product-model";

export const toggleProductCode = createAction(
    'Toggle product code'
);

export const setCurrentProduct = createAction(
    'Set current product',
    props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
    'Clear current product'
);

export const initializeNewProduct = createAction(
    'Initialize current roduct'
);

export const loadProducts = createAction(
    'Loading products array ... '
);

export const loadProductsSuccess = createAction(
    'Loaded products array success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    'Loaded products array fail',
    props<{ error: String }>()
);