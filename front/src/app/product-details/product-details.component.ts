import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from  '@angular/common';

import { Product } from '../products';
import { ProductsService } from '../product-list/products.service';
import { Observable } from 'rxjs';

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

  back() {
    this._location.back();
  }

  delete(productToRemove) {
    if (confirm('Deseja realmente remover o produto "' + productToRemove.name + '"?')) {
      this.productService.deleteProduct(productToRemove.id).subscribe(
        product => {
          window.alert('Produto "' + product.name + '" excluído!');
          this.back();
        }
      );
    }
  }

}
