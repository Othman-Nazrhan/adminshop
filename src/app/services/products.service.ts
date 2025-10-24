import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../model/product';
import { Order } from '../model/order';
import { MOCK_PRODUCTS, MOCK_ORDERS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [...MOCK_PRODUCTS];
  private orders: Order[] = [...MOCK_ORDERS];

  constructor() { }

  findAll(): Observable<IProduct[]> {
    return of(this.products);
  }

  allOrder(): Observable<Order[]> {
    return of(this.orders);
  }

  delete(id: number): Observable<any> {
    this.products = this.products.filter(p => p.id !== id);
    return of(null);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    const newId = Math.max(...this.products.map(p => p.id)) + 1;
    const newProduct = { ...product, id: newId };
    this.products.push(newProduct);
    return of(newProduct);
  }

  update(product: IProduct): Observable<IProduct> {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
    return of(product);
  }

}
