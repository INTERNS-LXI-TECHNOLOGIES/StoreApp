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

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  constructor( private cartService: CartService,
               private modalController: ModalController) { }

  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();

  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }

  async openCart() {

      const modal = await this.modalController.create({
        component : CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.present();
  }


}
