import { Router } from '@angular/router';
import { UserDTO } from './../../api/models/user-dto';
import { UserResourceService } from 'src/app/api/services';

import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
<<<<<<< Updated upstream
import { CartService, Product } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ProductResourceService } from 'src/app/api/services';

=======
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';
import { Storage } from '@ionic/storage';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: UserDTO;

  constructor(
<<<<<<< Updated upstream
    private router: Router,
    private alert: AlertController,
    private productResourceService: ProductResourceService,
    //private cartService: CartService,
    //private modalController: ModalController
    ) { }


  cart = [];
  //products = [];
  products: Product[]=[];
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
             //this.delete(id);
          }
        }
      ]
=======
    private userResourceService: UserResourceService,
    private storage: Storage,
    private routes: Router
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.storage.get('username').then((username) => {
      console.log(username, 'username');
      this.userResourceService.getUserUsingGET(username).subscribe((data) => {
        console.log(data);
        this.user = data;
        this.checkRole();
      });
>>>>>>> Stashed changes
    });
  }

  checkRole() {
    if (this.user.authorities.includes('ROLE_ADMIN')) {
      this.routes.navigateByUrl('admin-layout');
    } else {
      this.routes.navigateByUrl('user-layout');
    }
  }
}
