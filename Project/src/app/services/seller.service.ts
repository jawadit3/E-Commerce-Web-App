import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../types/Login';
import { SignUp } from '../types/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  public isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  public loginError = new EventEmitter<boolean>(false);
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

  login(payload: Login){
    this.http.get(`http://localhost:3000/sellers?email=${payload.email}&password=${payload.password}`
    ,{observe:'body'})
    .subscribe((data: any) => {
      if(data.length > 0){
        console.log(`${data.length}-${data}`)
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(data));
        this.router.navigate(['seller-home']);
      }
      else {
        console.log(`${data.length}-${data}`)
        this.loginError.next(true);
      }
    });
  }

  redirectToHome(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
