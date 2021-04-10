import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "";
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<[product]>(this.apiUrl);
  }

  delete(id) {

    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  addProduct(product){
    return this.http.post<product>(this.apiUrl,product);
  }

  // update(product){
  //   return this.http.put(`${this.apiUrl}/${product.id}`,product)
  // }

}