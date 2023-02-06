import { Component, Input } from '@angular/core';
import { Product } from '../product-model';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {
  @Input()
  chosenProduct?: Product;

  product: Product = {
    id: 1,
    productName: 'test',
    productCode: 'tesCode',
    description: 'desc',
    price: 10.99
  }
}
