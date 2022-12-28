import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  message : string | undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.isProductAdded.subscribe(
      data => {
        if(data){
           this.message = "product is added";
           setTimeout(() => this.message = undefined, 3000);
        }
      }
    );
  }

  addProduct(object: Product){
    this.productService.addProduct(object);
  }
}
