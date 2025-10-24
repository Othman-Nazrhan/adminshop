import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.loading = true;
    this.error = null;
    this.productService.allOrder().subscribe(
      orders => {
        this.orders = orders;
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load orders';
        this.loading = false;
        console.error('Error loading orders:', error);
      }
    );
  }

}
