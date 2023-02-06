import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  chosenProduct: Product | undefined;
  errorMessage!: string;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });
  }

  onClick(product: Product): void {
    console.log(this.chosenProduct);
    this.chosenProduct = product;
    console.log(this.chosenProduct);
  }
}
