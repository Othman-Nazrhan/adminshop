import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderComponent } from './components/order/order.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    ProductListComponent,
    OrderComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
