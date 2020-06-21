import { CartModalComponent } from './../cart-modal/cart-modal.component';

import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from 'src/app/core/dumb-data/ProductDumb';
import { ProductDTO } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductResourceService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs';
import { Categories } from 'src/app/core/mocks/categories.list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {


  @Input() categoryId: number;
  @Input() product: ProductDTO[];
  @Input() userRole = 'user';

  productsDumb = PRODUCTS;
  products = [];
  category;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  categories = [];
  router: any;

  constructor(private modalController: ModalController,
              private cartService: CartService,
              private productResourceService: ProductResourceService) { }

  ngOnInit() {

    if (this.userRole === 'admin') {
      console.log(this.categoryId);

      this.productsDumb.forEach((product) => {
        console.log(product.categoryId === this.categoryId);

        if (product.categoryId === this.categoryId){
          this.products.push(product);
        }
      });

    } else {
      this.cart = this.cartService.getCart();
      this.cartItemCount = this.cartService.getCartItemCount();
      this.getProduct(this.category.name);
      console.log('this is the product from component', this.category.name);


    }

  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }
  getProduct(category) {
    console.log('this is the product from component **********', this.category.name);
    this.productResourceService.findAllByCategoryUsingGET(category
    ).subscribe(bev => {
      this.category = bev; console.log(bev); });

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

this.router.navigateByUrl('update-product', id);
}




}
