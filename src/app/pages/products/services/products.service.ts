import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
//Decorador Injectable
@Injectable({
  providedIn: 'root' //disponible para toda aplicacion
})

export class ProductsService {
 private apiURL='http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  //Metodos

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }
}
