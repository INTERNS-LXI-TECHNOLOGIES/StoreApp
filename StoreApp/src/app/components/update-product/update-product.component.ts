<<<<<<< Updated upstream:StoreApp/src/app/pages/update-product/update-product.page.ts
import { CATEGORYS } from './../../dumb-data/CategoryDumb';
import { ProductDTO } from 'src/app/api/models';
import { Router } from '@angular/router';
=======
>>>>>>> Stashed changes:StoreApp/src/app/components/update-product/update-product.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {

  product:ProductDTO = {};

  categories = CATEGORYS;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigateByUrl('/tabs/home');
  }

}
