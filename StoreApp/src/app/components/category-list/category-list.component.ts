import { CategoryDTO } from 'src/app/api/models';
import { ModalController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import {
  QueryResourceService,
  CategoryResourceService,
} from 'src/app/api/services';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Categories } from 'src/app/core/mocks/categories.list';
import { ProductListComponent } from '../product-list/product-list.component';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  // categoryMap= Categories;
  categories = Categories;
  @Input() userRole = 'user';
  catergory = CATEGORYS;
  currentid;
  categorylist: CategoryDTO[] = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private alert: AlertController,
    private queryResourceService: QueryResourceService,
    private categoryResourceService: CategoryResourceService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryResourceService.getAllCategoriesUsingGET().subscribe((bev) => {
      this.categorylist = bev;
      console.log(bev);
    });
  }

  async getCategory(id: any) {
    const modal = await this.modalController.create({
      component: ProductListComponent,
      componentProps: { categoryid: id },
    });
    console.log('this is the categoryid from page', id);
    modal.present();
  }

  // async getCategory(product: any) {
  //   const modal = await this.modalController.create({
  //     component: ProductListComponent,
  //     componentProps: { category: product },
  //   });
  //   console.log('this is the product from page', product);
  //   modal.present();
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
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            // this.delete(id);
          },
        },
      ],
    });

    await alert.present();
  }
  // getCategories() {
  //   this.productResourceService.findAllCategoryUsingGET(category
  //     ).subscribe(bev => {
  //       this.category = bev; console.log(bev); });
  // }
  // async openCart() {

  //   const modal = await this.modalController.create({
  //     component : CartModalPage,
  //     cssClass: 'cart-modal'
  //   });
  //   modal.present();
  // }

  //  ngOnInit() {
  // this.products = this.cartService.getProduct();
  // this.cart = this.cartService.getCart();
  // this.cartItemCount = this.cartService.getCartItemCount();

  // addToCart(product) {
  //   this.cartService.addProduct(product);

  // }
}
