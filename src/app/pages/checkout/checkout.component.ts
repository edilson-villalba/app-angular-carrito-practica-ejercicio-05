import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    store: '',
    shippingAddress: '',
    city: ''
  };

  stores = [
    {
      "id": 1,
      "name": "Tienda 1 ",
      "address": "Mariscal Lopez Esq/ San Martin",
      "city": "Asunción",
      "openingHours":"10:00 - 14:00 and 17:00  - 20:30"
    },
    {
      "id": 2,
      "name": "Tienda 2 ",
      "address": "Brasilia esq Avenida Artigas",
      "city": "Asunción",
      "openingHours":"08:00 - 12:00 and 13:00  - 20:30"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onPickupOrDelivery(value: boolean): void{
    console.log('Hola Radio'+ value);
  }
  onSubmit():void{
    console.log('Hola Mundo')
  }

}
