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

  product:ProductDTO = {};
  id : number;
  categories = CATEGORYS;

  constructor(private router: Router,private route: ActivatedRoute,private productService:ProductResourceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductUsingGET(this.id).subscribe(pro => {
      this.product = pro
    })
  }
  goToHome(){
    this.router.navigateByUrl('admin-layout');
  }
  update() {
    this.productService.updateProductUsingPUT(this.product).subscribe();
  }

}
