import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { products } from '../products';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  products = products;

  constructor() { }

  getProducts (): any {
    let copy = [];
    Object.assign(copy, this.products);
    return copy;
  }

  save(product: any) {
    this.products.push(product);
  }
}