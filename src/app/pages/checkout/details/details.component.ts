import { Component, OnInit } from '@angular/core';
import { ShoppinCartService } from '../../products/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 /* Observables S*/
total$ = this.shoppingCartService.totalAction$;
cart$ = this.shoppingCartService.cartAction$;

  constructor(private shoppingCartService: ShoppinCartService) { }

  ngOnInit(): void {

  }
}
