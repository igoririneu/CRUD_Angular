import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Url = "http://localhost:3000/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.Url, product)
  }
}
