import { Router } from '@angular/router';
import { CartModalComponent } from './../cart-modal/cart-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from 'src/app/core/dumb-data/ProductDumb';
import { ProductDTO } from 'src/app/api/models';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductResourceService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs';
import { Categories } from 'src/app/core/mocks/categories.list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {


  @Input() categoryName: string;
  @Input() product: ProductDTO[];
  @Input() userRole = 'user';

  productsDumb = PRODUCTS;
  products = [];
  category;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  categories = [];


  constructor(private router:Router,
              private modalController: ModalController,
              private cartService: CartService,
              private productResourceService: ProductResourceService) { }

  ngOnInit() {

    if (this.userRole === 'admin') {
      
        this.productResourceService.findAllByCategoryUsingGET(this.categoryName).subscribe((pro : any) => {
          console.log(pro);
          this.products = pro;
        })
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
    this.productResourceService.findAllByCategoryUsingGET(category
    ).subscribe(bev => {
      this.category = bev; console.log(bev); });

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
goToProductDetailedView(id){
  this.router.navigateByUrl('product-detailed-view/'+id);

}

}
