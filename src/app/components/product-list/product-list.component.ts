import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.findAll()
      .subscribe(products => {
       this.products = products
      });
  }

  deleteProduct(id) {
    this.productService.delete(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id != id)
      })
  }
}
