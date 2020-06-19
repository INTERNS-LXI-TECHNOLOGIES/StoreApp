import { ModalController } from '@ionic/angular';
import { CartService } from './../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{

  cartItemCount: BehaviorSubject<number>;

  constructor( private cartService: CartService,
               private modal: ModalController) {}


  addToCart(product) {

  }

  openCart() {

  }


}
