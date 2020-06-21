import { ProductResourceService } from 'src/app/api/services';
import { CATEGORYS } from './../../dumb-data/CategoryDumb';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/api/models';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
//public product: Product;
 product : ProductDTO = {};
 categories = CATEGORYS;
  constructor(private router: Router,private ProductResourceService: ProductResourceService) { }

  ngOnInit() {

  }
  createProduct(){
    console.log(this.product.manufacturingDate);
    
    // this.ProductResourceService.createProductUsingPOST(this.product).subscribe(pro=>{

    // } )
    //this.goToHome();
  }
  goToHome(){
    this.router.navigateByUrl('/tabs/home');
  }
}
