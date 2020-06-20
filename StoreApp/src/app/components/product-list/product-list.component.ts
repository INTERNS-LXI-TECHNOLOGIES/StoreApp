import { PRODUCTS } from './../../dumb-data/ProductDumb';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() categoryId : number;

  productsDumb = PRODUCTS;
  products = [];

  constructor() { }

  ngOnInit() {
    console.log(this.categoryId);
    
    this.productsDumb.forEach((product) => {
      console.log(product.categoryId == this.categoryId);
      
      if(product.categoryId == this.categoryId){
        this.products.push(product);
      }
    });
  }

}
