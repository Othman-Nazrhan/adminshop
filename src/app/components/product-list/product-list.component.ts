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
  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.error = null;
    this.productService.findAll().subscribe(
      products => {
        this.products = products;
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error('Error loading products:', error);
      }
    );
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id).subscribe(
        () => {
          this.products = this.products.filter(product => product.id !== id);
        },
        error => {
          this.error = 'Failed to delete product';
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
