import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../model/product';
import { order } from '../model/order';
import { CONSTANTS } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<[IProduct]>(CONSTANTS.EndPoints.PRODUCTS_LIST);
  }

  // TODO
  allOrder() {
    return this.http.get<[order]>(CONSTANTS.EndPoints.PRODUCTS_LIST);
  }

  delete(id) {
    return this.http.delete(`${CONSTANTS.EndPoints.PRODUCTS_LIST}${id}`)
  }

  addProduct(product : IProduct){
    return this.http.post<IProduct>(CONSTANTS.EndPoints.PRODUCTS_LIST,product);
  }

  // update(product){
  //   return this.http.put(`${this.apiUrl}/${product.id}`,product)
  // }

}
