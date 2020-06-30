import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductDTO } from 'src/app/api/models';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';
import { ProductResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  manufacturingDate;
  expiringDate;
  product: ProductDTO = {};
  id: number;
  categories = CATEGORYS;
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductResourceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.productService.getProductUsingGET(this.id).subscribe(pro => {
      this.product = pro
      this.manufacturingDate = pro.manufacturingDate.slice(0,pro.manufacturingDate.length-1);
      this.expiringDate = pro.expiringDate.slice(0,pro.expiringDate.length-1);
    })
  }
  goToHome() {
    this.router.navigateByUrl('admin-layout');
  }
  update() {
    this.product.manufacturingDate = this.manufacturingDate.split('+')[0] + 'Z';
    this.product.expiringDate = this.expiringDate.split('+')[0] + 'Z';
    this.productService.updateProductUsingPUT(this.product).subscribe((pro) => this.goToHome());

  }

}
