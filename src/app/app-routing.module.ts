import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderComponent } from './components/order/order.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-product', pathMatch: 'full' },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'orders', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
