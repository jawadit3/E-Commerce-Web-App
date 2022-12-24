import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { SignUp } from '../types/SignUp';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.redirectToHome();
  }

  signUp(payload : SignUp){
    let result = this.sellerService.signUp(payload);
  }

}
