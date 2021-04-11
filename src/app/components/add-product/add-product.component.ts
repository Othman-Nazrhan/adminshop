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
  product = new FormGroup({
    product: new FormControl(null, Validators.required),
    prix: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    img: new FormControl(null, Validators.required),
  });

  file = "";
  constructor(private productService: ProductService, private router  : Router) {}

  ngOnInit(): void {}

  add(product) {
    const p: IProduct = {
      id: 11,
      marque: product.controls.category.value,
      price: product.controls.prix.value,
      pictures : [
        this.file
      ],
      productTypeVO :  {
        "id": 1,
        "name": "Ventes de matériel informatique.",
        "description": "Informatique"
        },
      name : product.controls.product.value
    };
    this.productService.addProduct(p).subscribe(
      (res) => {
        this.router.navigateByUrl("")
      },
      error => {
        alert("ko");
    });
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result.toString();
    };
  }
}
