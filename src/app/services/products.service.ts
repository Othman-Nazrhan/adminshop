import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { Order } from '../model/order';
import { CONSTANTS } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(CONSTANTS.EndPoints.PRODUCTS_LIST);
  }

  allOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(CONSTANTS.EndPoints.ORDERS_LIST);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${CONSTANTS.EndPoints.PRODUCTS_LIST}${id}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(CONSTANTS.EndPoints.PRODUCTS_LIST, product);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${CONSTANTS.EndPoints.PRODUCTS_LIST}${product.id}`, product);
  }

}
