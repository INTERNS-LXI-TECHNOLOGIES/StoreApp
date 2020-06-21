import { Router } from '@angular/router';
import { Product } from 'src/app/services/cart.service';
import { PRODUCTS } from './../../dumb-data/ProductDumb';
import { Component, OnInit, Input } from '@angular/core';
import { ProductResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() categoryName : string;

  productsDumb = PRODUCTS;
  products: Product[]= [];

  constructor(private productResourceService:ProductResourceService,  private router: Router,) { }


  ngOnInit() {
    // console.log(this.categoryId);
    
    // this.productsDumb.forEach((product) => {
    //   console.log(product.categoryId == this.categoryId);
      
    //   if(product.categoryId == this.categoryId){
    //     this.products.push(product);
    //   }
    // });
    this.productResourceService.findAllByCategoryUsingGET(this.categoryName).subscribe(pro => {
      console.log(pro);
      //this.products = pro;
    })
      console.log(this.categoryName);

  }

  delete(id: number){
    this.productResourceService.deleteProductUsingDELETE(id).subscribe();
    this.products = this.products.filter(pro => id !== pro.id);
  }

  gotoUpdate(id) {

  this.router.navigateByUrl('update-product',id);
  }

}
