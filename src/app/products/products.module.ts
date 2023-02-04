import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
