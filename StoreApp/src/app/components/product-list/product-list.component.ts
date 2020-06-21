<<<<<<< Updated upstream
import { Router } from '@angular/router';
import { Product } from 'src/app/services/cart.service';
import { PRODUCTS } from './../../dumb-data/ProductDumb';
import { Component, OnInit, Input } from '@angular/core';
import { ProductResourceService } from 'src/app/api/services';
=======
import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from 'src/app/core/dumb-data/ProductDumb';
import { ProductDTO } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductResourceService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { Categories } from 'src/app/core/mocks/categories.list';
>>>>>>> Stashed changes

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

<<<<<<< Updated upstream
  @Input() categoryName : string;

  productsDumb = PRODUCTS;
  products: Product[]= [];

  constructor(private productResourceService:ProductResourceService,  private router: Router,) { }


  ngOnInit() {
    // console.log(this.categoryId);
    
    // this.productsDumb.forEach((product) => {
    //   console.log(product.categoryId == this.categoryId);
      
    //   if(product.categoryId == this.categoryId){
    //     this.products.push(product);
    //   }
    // });
    this.productResourceService.findAllByCategoryUsingGET(this.categoryName).subscribe(pro => {
      console.log(pro);
      //this.products = pro;
    })
      console.log(this.categoryName);

  }

  delete(id: number){
    this.productResourceService.deleteProductUsingDELETE(id).subscribe();
    this.products = this.products.filter(pro => id !== pro.id);
  }

  gotoUpdate(id) {

  this.router.navigateByUrl('update-product',id);
=======
  @Input() categoryId: number;
  @Input() product: ProductDTO[];
  @Input() userRole = 'user';

  productsDumb = PRODUCTS;
  products = [];
  category;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  categories = [];

  constructor(private modalController: ModalController,
              private cartService: CartService,
              private productService: ProductResourceService) { }

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
    this.productService.findAllByCategoryUsingGET(category
    ).subscribe(bev => {
      this.category = bev; console.log(bev); });

>>>>>>> Stashed changes
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




}
