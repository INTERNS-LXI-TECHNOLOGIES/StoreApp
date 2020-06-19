
import { ModalController, AlertController } from '@ionic/angular';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/cart.service';
import { Util } from 'src/app/services/util';
@Component({
    selector: 'app-specific-item',
    templateUrl: './specific-item.component.html',
    styleUrls: ['./specific-item.component.scss'],
    providers: [Util]
  })

export class  SpecificItemComponent implements OnInit {
   cart: Product[] = [];
  constructor( private cartService: CartService,
               private modalController: ModalController,
               private alertCntoller: AlertController,
               private util: Util,
                ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalController.dismiss();
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process

    const alert = await this.alertCntoller.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your food as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalController.dismiss();
    });
  }

keepshopping() {
  this.util.navigateCategories();
}
}
