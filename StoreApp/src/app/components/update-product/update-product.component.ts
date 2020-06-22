import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from 'src/app/api/models';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

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
