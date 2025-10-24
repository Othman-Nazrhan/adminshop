import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './products.service';
import { MOCK_PRODUCTS, MOCK_ORDERS } from '../mock-data';
import { CONSTANTS } from '../config/constants';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all products', () => {
    service.findAll().subscribe(products => {
      expect(products).toEqual(MOCK_PRODUCTS);
    });

    const req = httpMock.expectOne(CONSTANTS.EndPoints.PRODUCTS_LIST);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_PRODUCTS);
  });

  it('should fetch all orders', () => {
    service.allOrder().subscribe(orders => {
      expect(orders).toEqual(MOCK_ORDERS);
    });

    const req = httpMock.expectOne(CONSTANTS.EndPoints.ORDERS_LIST);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_ORDERS);
  });

  it('should delete a product', () => {
    const productId = 1;

    service.delete(productId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${CONSTANTS.EndPoints.PRODUCTS_LIST}${productId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should add a product', () => {
    const newProduct = MOCK_PRODUCTS[0];

    service.addProduct(newProduct).subscribe(product => {
      expect(product).toEqual(newProduct);
    });

    const req = httpMock.expectOne(CONSTANTS.EndPoints.PRODUCTS_LIST);
    expect(req.request.method).toBe('POST');
    req.flush(newProduct);
  });

  it('should update a product', () => {
    const updatedProduct = MOCK_PRODUCTS[0];

    service.update(updatedProduct).subscribe(product => {
      expect(product).toEqual(updatedProduct);
    });

    const req = httpMock.expectOne(`${CONSTANTS.EndPoints.PRODUCTS_LIST}${updatedProduct.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedProduct);
  });
});
