import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  newProduct : any;

  products : [];

  private productService: ProductsService

  constructor() {
    this.productService = new ProductsService();
   }

  ngOnInit() {
    this.newProduct = new Object();
    this.getProducts();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.save(this.newProduct);
      this.newProduct = new Object();
      this.getProducts();
    }
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/