import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product-model';
import { ProductsService } from '../services/products.service';
import { ProductReducerState } from '../state/product.reducer';
import { getCurrentProductId, getIsEditMode, getShowProductCode } from '../state/product.selectors';
import * as ProductAction from '../state/product.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  products!: Product[];
  chosenProduct: Product | undefined;
  errorMessage!: string;
  displayCode: boolean = false;
  chosenProductId?: Number;
  isEditMode?: Number;

  constructor(private productService: ProductsService, private store: Store<ProductReducerState>) { }

  ngOnInit(): void {
    this.store.select(getShowProductCode).subscribe(
      showProductCode => {
        this.displayCode = showProductCode
      }
    );

    this.store.select(getCurrentProductId).subscribe(
      productId => {
        this.chosenProductId = productId
      }
    );

    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
  }

  selectProduct(product: Product): void {
    let editMode;

    this.store.select(getIsEditMode)
      .subscribe(
        isEditMode => {
          editMode = isEditMode
        }
      );

    if (editMode) {
      alert('Brooo!!!!');
    }
    else {
      this.store.dispatch(ProductAction.setCurrentProductId({ productId: product.id }));
      this.store.dispatch(ProductAction.setCurrentProduct({ product }));
    }
  }

  addProduct(): void {
    this.store.dispatch(ProductAction.setIsEditModeOnTrue());
    this.store.dispatch(ProductAction.setCurrentProductId({ productId: 0 }));
    this.store.dispatch(ProductAction.initializeNewProduct());
  }

  showProductCode(): void {
    this.store.dispatch(
      ProductAction.toggleProductCode()
    )
  }
}
