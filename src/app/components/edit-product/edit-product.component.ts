import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { IProduct } from '../../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    image: new FormControl(null),
  });

  product: IProduct | null = null;
  file = '';
  loading = false;
  error: string | null = null;
  productId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProduct();
  }

  loadProduct(): void {
    if (this.productId) {
      this.loading = true;
      this.productService.findAll().subscribe(
        products => {
          this.product = products.find(p => p.id === this.productId) || null;
          if (this.product) {
            this.productForm.patchValue({
              name: this.product.name,
              price: this.product.price,
              category: this.product.marque,
            });
            this.file = this.product.pictures[0] || '';
          } else {
            this.error = 'Product not found';
          }
          this.loading = false;
        },
        error => {
          this.error = 'Failed to load product';
          this.loading = false;
          console.error('Error loading product:', error);
        }
      );
    }
  }

  update(): void {
    if (this.productForm.valid && this.product) {
      this.loading = true;
      this.error = null;

      const formValue = this.productForm.value;
      const updatedProduct: IProduct = {
        ...this.product,
        name: formValue.name,
        price: formValue.price,
        marque: formValue.category,
        pictures: this.file ? [this.file] : this.product.pictures,
      };

      this.productService.update(updatedProduct).subscribe(
        () => {
          this.loading = false;
          this.router.navigateByUrl('/product-list');
        },
        error => {
          this.error = 'Failed to update product';
          this.loading = false;
          console.error('Error updating product:', error);
        }
      );
    } else {
      this.error = 'Please fill in all required fields correctly';
    }
  }

  handleUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = reader.result as string;
      };
      reader.onerror = () => {
        this.error = 'Failed to read file';
      };
    }
  }
}
