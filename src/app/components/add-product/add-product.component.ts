import { IProduct } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    image: new FormControl(null, Validators.required),
  });

  file = '';
  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  add(): void {
    if (this.productForm.valid) {
      this.loading = true;
      this.error = null;

      const formValue = this.productForm.value;
      const product: IProduct = {
        name: formValue.name,
        price: formValue.price,
        marque: formValue.category,
        pictures: [this.file],
        productTypeVO: {
          id: 1,
          name: 'Ventes de matériel informatique.',
          description: 'Informatique'
        }
      };

      this.productService.addProduct(product).subscribe(
        (res) => {
          this.loading = false;
          this.router.navigateByUrl('/product-list');
        },
        error => {
          this.error = 'Failed to add product';
          this.loading = false;
          console.error('Error adding product:', error);
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
