import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isProductAdded = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient) { }

  addProduct(payload: Product){
    this.http.post("http://localhost:3000/products",payload)
    .subscribe(data => {
      if(data){
        this.isProductAdded.next(true);
      }
    });
  }
}
