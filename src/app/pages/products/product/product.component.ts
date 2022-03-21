import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent  {
  @Input() product!: Product;
  @Output()addCartProduct = new EventEmitter<Product>();
 

  onClick():void{
    console.log('Add product To Shopping Cart');
    this.addCartProduct.emit(this.product);

  }

}
