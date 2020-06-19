import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-prodouct',
  templateUrl: './create-prodouct.page.html',
  styleUrls: ['./create-prodouct.page.scss'],
})
export class CreateProdouctPage implements OnInit {
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
    this.router.navigateByUrl('/tabs/tab1');
  }
}
