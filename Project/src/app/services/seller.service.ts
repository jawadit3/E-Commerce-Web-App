import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from '../types/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  public isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient,
    private router:Router) { }

  signUp(payload: SignUp){
    this.http.post('http://localhost:3000/sellers', payload).subscribe(
      data => {
        if(data){
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(data));
          this.router.navigate(['seller-home']);
        }
      }
    );
  }

  redirectToHome(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
