import { CATEGORYS } from './../../dumb-data/CategoryDumb';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { CartModalPage } from './../cart-modal/cart-modal.page';
import { ModalController } from '@ionic/angular';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  catergory = CATEGORYS;
  currentid

  constructor(
    private router: Router,
    private alert: AlertController,
    //private cartService: CartService,
    //private modalController: ModalController
    ) { }


  cart = [];
  products = [];
  //cartItemCount: BehaviorSubject<number>;


  ngOnInit() {
    // this.products = this.cartService.getProduct();
    // this.cart = this.cartService.getCart();
    // this.cartItemCount = this.cartService.getCartItemCount();

  }

  // addToCart(product) {
  //   this.cartService.addProduct(product);

  // }
  gotoCreateProductPage() {
    this.router.navigateByUrl('/create-product');
  }
  goToCreateCatogeryPage() {
    this.router.navigateByUrl('/create-category');
  }
  arrowProcess(id) {
    this.currentid = id;
  }
  goToUpdateProductPage() {
    this.router.navigateByUrl('update-product');
  }



  async presentAlertConfirm(id) {
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
            // this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  // async openCart() {

  //   const modal = await this.modalController.create({
  //     component : CartModalPage,
  //     cssClass: 'cart-modal'
  //   });
  //   modal.present();
  // }


}
