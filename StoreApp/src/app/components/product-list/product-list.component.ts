import { Router } from '@angular/router';
import { CartModalComponent } from './../cart-modal/cart-modal.component';

import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from 'src/app/core/dumb-data/ProductDumb';
import { ProductDTO } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductResourceService, QueryResourceService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs';
import { Categories } from 'src/app/core/mocks/categories.list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {


  @Input() categoryName: string;
  @Input() product: ProductDTO[];
  @Input() userRole = 'user';

  productsDumb = PRODUCTS;
  products = [];
  categoryid;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  categories = [];


  constructor(private router: Router,
              private modalController: ModalController,
              private cartService: CartService,
              private productResourceService: ProductResourceService,
              private queryResourceService: QueryResourceService) { }

  ngOnInit() {
// this.getProduct(this.categoryid);
if (this.userRole === 'admin') {

        this.queryResourceService.findAllProductsByCategoryIdUsingGET(this.categoryid).subscribe((pro: any) => {
          console.log(pro);
          this.products = pro;
        });
    } else {
      this.cart = this.cartService.getCart();
      this.cartItemCount = this.cartService.getCartItemCount();
      this.getProduct(this.categoryid);
      console.log('this is the productid from component', this.categoryid);


    }

  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }
  getProduct(categoryid) {
    console.log('this is the categoryid from component **********', this.categoryid);
    this.queryResourceService.findAllProductsByCategoryIdUsingGET(categoryid
    ).subscribe(bev => {
      this.categoryid = bev; console.log(bev); });

  }

  async openCart() {

      const modal = await this.modalController.create({
        component : CartModalComponent,
        cssClass: 'cart-modal'
      });
      modal.present();
  }
  closeModal() {
    this.modalController.dismiss();
 }


 delete(id: number){
  this.productResourceService.deleteProductUsingDELETE(id).subscribe();
  this.products = this.products.filter(pro => id !== pro.id);
}

gotoUpdate(id) {

this.router.navigateByUrl('update-product/' + id);
}




}
