import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
