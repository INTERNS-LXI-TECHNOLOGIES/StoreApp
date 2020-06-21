import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
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
