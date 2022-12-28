import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { Login } from '../types/Login';
import { SignUp } from '../types/SignUp';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin = true;
  authError = '';
  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.redirectToHome();
  }

  signUp(payload : SignUp){
    let result = this.sellerService.signUp(payload);
  }

  openSignUp(){
    this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;
  }

  login(payload : Login){
    this.authError = "";
    let result = this.sellerService.login(payload);
    this.sellerService.loginError.subscribe(
      error => { if(error) this.authError = "something went wrong"; }
    );
  }
}
