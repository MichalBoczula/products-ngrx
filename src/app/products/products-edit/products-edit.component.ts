import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product-model';
import { ProductReducerState } from '../state/product.reducer';
import { getCurrentProduct } from '../state/product.selectors';


@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  chosenProduct?: Product;

  constructor(private store: Store<ProductReducerState>) { }

  ngOnInit(): void {
    this.store.select(getCurrentProduct)
      .subscribe(
        currentProduct => {
          this.chosenProduct = currentProduct
        }
      );
  }

  product: Product = {
    id: 1,
    productName: 'test',
    productCode: 'tesCode',
    description: 'desc',
    price: 10.99
  }
}
