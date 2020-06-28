import { AlertController } from '@ionic/angular';
import { ProductDTO } from 'src/app/api/models';
import { ProductResourceService } from 'src/app/api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.scss'],
})

export class ProductDetailedViewComponent implements OnInit {
id
 product: ProductDTO = {};

  constructor(private alert: AlertController, private router: Router,private route: ActivatedRoute,private productResourceService: ProductResourceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    
    this.productResourceService.getProductUsingGET(this.id).subscribe(pro => {
      this.product = pro
    })
  }
goToHome(){
  this.router.navigateByUrl('admin-layout');
}
gotoUpdate() {

  this.router.navigateByUrl('update-product/'+this.product.id);
  }
  
goToUpdateStock(){
  this.router.navigateByUrl('update-stock/'+this.product.id);
}
async deleteProduct() {
  const alert = await this.alert.create({
    header: 'Delete',
    message: 'Are you sure ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Okay',
        handler: () => {
          this.productResourceService.deleteProductUsingDELETE(this.product.id).subscribe();
        }
      }
    ]
  });

  await alert.present();
}
}
