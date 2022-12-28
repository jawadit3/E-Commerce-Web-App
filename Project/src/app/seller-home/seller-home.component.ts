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
  message : String | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.loadProducts();
  }

  deleteProduct(id: number | undefined){
    if(id){
      this.productService.deleteProduct(id).subscribe(
        data => {
          if(data){
            this.message = "product removed.";
            this.loadProducts();
            this.setMessage();

          }
        }
      );
    }
  }

  loadProducts(){
    this.productService.getProducts()
    .subscribe(data => {
      this.productList = data;
    });
  }

  setMessage(){
    setTimeout(() => this.message = undefined, 3000);
  }
}
