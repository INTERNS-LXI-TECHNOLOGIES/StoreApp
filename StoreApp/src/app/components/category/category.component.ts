import { CartModalPage } from './../../pages/cart-modal/cart-modal.page';
import { Categories } from './../../mocks/categories.list';
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
  categories= Categories;

  cart = [];
  products = [];

  cartItemCount: BehaviorSubject<number>;
  constructor(private modalController: ModalController,
              private cartService: CartService,
              ) { }

              // private productService: ProductResourseService
  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    // this.getProduct(this.categories);
  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }
  // getProduct(category) {
  //   this.productService.getAllProductByCategoryUsingGET(category
  //   ).subscribe(bev => this.categories = bev);
  // }

  async openCart() {

      const modal = await this.modalController.create({
        component : CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.present();
  }



}
