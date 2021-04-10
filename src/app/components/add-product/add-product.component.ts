import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = new FormGroup({
    product: new FormControl(null, Validators.required),
    prix: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    img: new FormControl(null, Validators.required),
    
  });


  constructor(private productService : ProductService) { }


  ngOnInit(): void {
  }
 

add(product){
  this.productService.addProduct(product)
  .subscribe(res =>
       alert("don")  )  
}
}
