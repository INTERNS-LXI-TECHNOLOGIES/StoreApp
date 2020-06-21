import { ProductResourceService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/api/models';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
// public product: Product;
 product: ProductDTO = {};
 categories = CATEGORYS;
  constructor(private router: Router, private ProductResourceService: ProductResourceService) { }
  manufacturingDate: string;
  expiringDate: string;
  ngOnInit() {

  }
  createProduct(){
    console.log(this.manufacturingDate.split('+')[0] + 'Z');
    this.product.manufacturingDate = this.manufacturingDate.split('+')[0] + 'Z';
    this.product.expiringDate = this.expiringDate.split('+')[0] + 'Z';
    this.ProductResourceService.createProductUsingPOST(this.product).subscribe(pro => {

    } );
//   this.goToHome();
  }
  goToHome(){
    this.router.navigateByUrl('/tabs/home');
  }
}

