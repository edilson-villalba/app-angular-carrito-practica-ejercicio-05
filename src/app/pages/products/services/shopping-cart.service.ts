import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "../interfaces/product.interface";

@Injectable(
    { providedIn: 'root' }
)
export class ShoppinCartService {
    // Array para cargar los Articulos
    products: Product[] = [];

    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);

    updateCart(product: Product):void{
        this.addProduct(product);    
        this.quatityTotal();
        this.calcTotal();
    }


    get totalAction$(): Observable<number> {
        return this.totalSubject.asObservable();
    }

    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }

    get cartAction$(): Observable<Product[]> {
        return this.cartSubject.asObservable();
    }

    private calcTotal(): void {
        const total = this.products.reduce((acc, pro) => acc += (pro.price * pro.qty), 0);
        this.totalSubject.next(total);
    }

    private quatityTotal(): void {
        const totalQuantity = this.products.reduce((acc, pro) => acc +=  pro.qty, 0);;
        this.quantitySubject.next(totalQuantity)
    }

    private addProduct(product: Product): void {
        const isProductInCart = this.products.find(({id})=> id === product.id) 

        if (isProductInCart){
            isProductInCart.qty +=1;
        }else{
           this.products.push({...product, qty:1});
        } 
        this.cartSubject.next(this.products)
    }
}