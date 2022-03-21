import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from '../services/products.service';
import { ShoppinCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!:Product[];
  constructor(private productService: ProductsService, private shoppingCartService: ShoppinCartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .pipe(tap((products: Product[])=>this.products=products))
    .subscribe();
  }

  addToShoppingCart(product: Product):void{
    this.shoppingCartService.updateCart(product);

  }

}
