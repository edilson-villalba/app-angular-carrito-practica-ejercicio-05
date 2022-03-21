import { Component, OnInit } from '@angular/core';
import { ShoppinCartService } from 'src/app/pages/products/services/shopping-cart.service';

//Decorador
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

// Decora una Clase
export class CartComponent implements OnInit {
  
  // Observales
  quantity$ = this.shoppingCartService.quantityAction$;
  total$ = this.shoppingCartService.totalAction$;
  cart$ = this.shoppingCartService.cartAction$;

  // se inyecta el service CART
  constructor(private shoppingCartService: ShoppinCartService) { }

  ngOnInit(): void {
  }

}
