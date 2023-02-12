import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './state/product.reducer';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('products', ProductReducer)
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
