import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product-model';
import { ProductReducerState } from '../state/product.reducer';
import { getCurrentProduct, getIsEditMode } from '../state/product.selectors';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  chosenProduct?: Product;
  isEditMode!: boolean;

  constructor(private store: Store<ProductReducerState>) { }

  ngOnInit(): void {
    this.store.select(getCurrentProduct)
      .subscribe(
        currentProduct => {
          this.chosenProduct = currentProduct
        }
      );
    this.store.select(getIsEditMode)
      .subscribe(
        isEditMode => {
          this.isEditMode = isEditMode
        }
      );
  }
}
