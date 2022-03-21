import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsRoutingModule } from '../products/product-routing.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductsComponent, ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
