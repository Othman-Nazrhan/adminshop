import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[] = [];
  resultProducts: product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }
  getProducts() {
    this.productService.findAll()
      .subscribe(products => {
       this.resultProducts = this.products = products
      });
  }
}
