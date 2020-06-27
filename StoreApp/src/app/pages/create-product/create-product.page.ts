import { CategoryDTO } from './../../api/models/category-dto';
import { ProductResourceService, CategoryResourceService } from 'src/app/api/services';
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
 categories : CategoryDTO[] = [];
  constructor(private categoryService: CategoryResourceService, private router: Router, private productResourceService: ProductResourceService) { }
  manufacturingDate: string;
  expiringDate: string;
  ngOnInit() {
    this.categoryService.getAllCategoriesUsingGET().subscribe(cate => {
      this.categories = cate;
    })
  }
  createProduct(){
    console.log(this.manufacturingDate.split('+')[0] + 'Z');
    this.product.manufacturingDate = this.manufacturingDate.split('+')[0] + 'Z';
    this.product.expiringDate = this.expiringDate.split('+')[0] + 'Z';
    this.productResourceService.createProductUsingPOST(this.product).subscribe(pro => {
      this.goToHome();
    } );
  }
  goToHome(){
    this.router.navigateByUrl('/admin-layout');
  }
  
}

