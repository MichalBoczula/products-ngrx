import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../product-model';
import { ProductsService } from '../services/products.service';

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

  constructor(private productService: ProductsService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('products').subscribe(
      products => {
        this.displayCode = products.showProductCode
      }
    );

    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
  }

  onClick(product: Product): void {
    console.log(this.chosenProduct);
    this.chosenProduct = product;
    console.log(this.chosenProduct);
  }

  showProductCode(): void {
    this.store.dispatch(
      { type: 'Toggle product code' }
    )
  }
}
