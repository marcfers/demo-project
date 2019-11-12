import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { products, Product } from '../products';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  /*products = products;

  constructor() { }

  getProducts (): any {
    let copy = [];
    Object.assign(copy, this.products);
    return copy;
  }

  save(product: any) {
    this.products.push(product);
  }*/

  // Define API
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Products list
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + '/product/list')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch product
  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/product/' + id + '/details')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create product
  createProduct(product): Observable<Number> {
    return this.http.post<Number>(this.apiURL + '/product', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update product
  updateProduct(id, product): Observable<Product> {
    return this.http.put<Product>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete product
  deleteProduct(id){
    return this.http.delete<Product>(this.apiURL + '/products/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
