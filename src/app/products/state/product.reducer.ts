import { createAction, createReducer, on } from "@ngrx/store";


export const ProductReducer = createReducer(
    { showProductCode: true },
    on(createAction('Toggle product code'), state => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        }
    })
)