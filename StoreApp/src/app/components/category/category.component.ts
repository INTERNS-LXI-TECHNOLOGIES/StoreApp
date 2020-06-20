import { SpecificItemComponent } from './../specific-item/specific-item.component';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/mocks/category.list';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // category = Category;

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  constructor(private modalController: ModalController,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  // async viewItem(){
  //   const modal = await this.modalController.create({
  //     component: SpecificItemComponent,
  //     // componentProps: { category: categories ,sessions: this.categoryMap.get(categories.name)}
  //   });
  //   modal.present();
  // }

  addToCart(product) {
    this.cartService.addProduct(product);

  }

  async openCart() {

      const modal = await this.modalController.create({
        component : SpecificItemComponent,
        // cssClass: 'cart-modal'
      });
      modal.present();
  }



}
