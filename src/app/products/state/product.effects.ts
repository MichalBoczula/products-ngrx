import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import * as ProductActions from "./product.actions";

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
        private productService: ProductsService) { }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductActions.loadProductsSuccess({ products })),
                catchError(err => of(ProductActions.loadProductsFailure({ error: err })))
            ))
        )
    });
}