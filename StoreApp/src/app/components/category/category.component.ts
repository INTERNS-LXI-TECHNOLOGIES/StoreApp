import { ProductDTO } from './../../api/models/product-dto';
// import { Category } from './../../mocks/category.list';
import { Product } from './../../services/cart.service';
import { CartModalPage } from './../../pages/cart-modal/cart-modal.page';
import { Categories } from './../../mocks/categories.list';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
// import { Category } from 'src/app/mocks/category.list';
import { CartService } from 'src/app/services/cart.service';
import { ProductResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() product: ProductDTO[];
  categories = Categories;
  // tslint:disable-next-line: no-input-rename
  category;
  cart = [];
  products = [];

  cartItemCount: BehaviorSubject<number>;
  constructor(private modalController: ModalController,
              private cartService: CartService,
              private productService: ProductResourceService
              ) { }

              // private productService: ProductResourseService
  ngOnInit() {
    // this.products = this.cartService.getProduct();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.getProduct(this.category.name);
    console.log('this is the product from component', this.category.name);
  }

  addToCart(product) {
    this.cartService.addProduct(product);

  }
  getProduct(category) {
    console.log('this is the product from component **********', this.category.name);
    this.productService.findAllByCategoryUsingGET(category
    ).subscribe(bev => {
      this.category = bev; console.log(bev); });

  }

  async openCart() {

      const modal = await this.modalController.create({
        component : CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.present();
  }
  closeModal() {
    this.modalController.dismiss();
 }


}
