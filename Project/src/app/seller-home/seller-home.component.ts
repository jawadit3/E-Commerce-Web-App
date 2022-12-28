import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList : Product[] | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(data => {
      this.productList = data;
    });
  }

}
