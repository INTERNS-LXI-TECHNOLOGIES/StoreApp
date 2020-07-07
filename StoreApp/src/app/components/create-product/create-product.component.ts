import { ProductResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDTO } from 'src/app/api/models';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  product: ProductDTO = {};
  categories = CATEGORYS;
   constructor(private router: Router,
               private productResourceService: ProductResourceService) { }
   manufacturingDate: string;
   expiringDate: string;
   ngOnInit() {

   }
   createProduct(){
     console.log(this.manufacturingDate.split('+')[0] + 'Z');
     this.product.manufacturingDate = this.manufacturingDate.split('+')[0] + 'Z';
     this.product.expiringDate = this.expiringDate.split('+')[0] + 'Z';
     this.productResourceService.createProductUsingPOST(this.product).subscribe(pro => {
      this.goToHome();
     } );
 //   this.goToHome();
   }
   goToHome(){
     this.router.navigateByUrl('admin-layout');
   }

}
