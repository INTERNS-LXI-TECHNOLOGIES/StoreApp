import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
//public product: Product;
 product={
   name:"",
   price:"",
   quantity:"",
   discription:""
 };
  constructor(private router: Router) { }

  ngOnInit() {

  }
  goToHome(){
    this.router.navigateByUrl('/tabs/home');
  }
}
