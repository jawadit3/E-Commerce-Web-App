import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType = "default";
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('init');
    this.router.events.subscribe((val: any) => {

      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = "seller";
          console.log('seller');
        }
        else{
          this.menuType = "default";
          console.log('default');
        }
      }
    });

  }

  logout(){
    localStorage.clear();
  }

}
