import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigateByUrl('/tabs/tab1');
  }
}
