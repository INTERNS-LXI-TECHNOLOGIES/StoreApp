import { ProductDTO } from './../../api/models/product-dto';
import { ProductResourceService } from 'src/app/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss'],
})
export class UpdateStockComponent implements OnInit {
  id

product : ProductDTO = {};

manufacturingDate;
expiringDate;
  constructor(private router: Router,private route: ActivatedRoute , private productService:ProductResourceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    
    this.productService.getProductUsingGET(this.id).subscribe(pro => {
      this.product = pro;
      this.product.id = null;
    })
  }
  goToHome(){
    this.router.navigateByUrl('admin-layout');
  }
  stockIncreaseProcess(){
  this.product.noOfStock++;

  }
  stockDecreaseProcess(){
    this.product.noOfStock--;
  }
  createProduct(){
    console.log(this.manufacturingDate.split('+')[0] + 'Z');
    this.product.manufacturingDate = this.manufacturingDate.split('+')[0] + 'Z';
    this.product.expiringDate = this.expiringDate.split('+')[0] + 'Z';
    this.productService.createProductUsingPOST(this.product).subscribe(pro => {
     this.goToHome();
    } );
  }
}
