import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from  '@angular/common';

import { Product } from '../products';
import { ProductsService } from '../product-list/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.product = products[+params.get('productId')];
      let productId = +params.get('productId');
      this.productService.getProduct(productId).subscribe(
        product => this.product = product             
      )
    });
  }

  delete(product) {
    if (confirm('Deseja realmente remover o produto ' + product.name + '?')) {  
      this.productService.deleteProduct(product.id).subscribe(
        retProduct => {
          window.alert('Produto ' + retProduct.name + ' excluído!');
          this._location.back();
        }
      );
    }
  }
}
