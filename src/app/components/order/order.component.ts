import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/model/order';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: order[] = [];
  resultOrders: order[] = [];
  constructor(private productService:ProductService) {  }

  ngOnInit(): void {
  }

getAll(){
  this.productService.allOrder()
  .subscribe( order =>
      this.resultOrders= this.orders = order
    )
}

}
