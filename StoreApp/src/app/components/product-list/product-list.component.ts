import { Router } from '@angular/router';
import { CartModalComponent } from './../cart-modal/cart-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/core/services/cart.service';
import {
  ProductResourceService,
  QueryResourceService,
  CartResourceService,
  CommandResourceService,
} from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs';
import { Categories } from 'src/app/core/mocks/categories.list';
import { ProductDTO } from 'src/app/api/models';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {


  @Input() categoryId: number;
  @Input() product: ProductDTO[];
  @Input() userRole = 'user';
  viewCart = false;

  products = [];
  categoryid;
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  categories = [];

    productNumberMap  = new Map<number, number>();

  constructor(private router: Router,
              private modalController: ModalController,
              private cartService: CartService,
              private queryResourceService: QueryResourceService,
              private productResourceService: ProductResourceService,
              private cartResourceService: CartResourceService,
              private commandResourceService: CommandResourceService) { }

  ngOnInit() {

if (this.userRole === 'admin') {
  console.log(this.categoryId);

  this.queryResourceService.findAllProductsByCategoryIdUsingGET(this.categoryId).subscribe((pro: any) => {
          console.log(pro);
          this.products = pro;
        });
    } else {
      this.cart = this.cartService.getCart();
      this.cartItemCount = this.cartService.getCartItemCount();
      this.getProduct(this.categoryid);
      console.log('this is the productid from component', this.categoryid);
    }


  }

  addToCart(product) {
    let count = this.productNumberMap.get(product.id);
    if (!count) {
    this.productNumberMap.set(product.id , 1);
    count = 1;
   } else {
    count++;

    this.productNumberMap.set(product.id , count);

   }
    console.log(count, 'count is', product.id, 'oroduct id');

    this.commandResourceService.addCartUsingPOST({
      productDTO: product,
      customerId: this.cartService.customerId

    }).subscribe((data) => {
      console.log(data, 'what is gettinng');
      this.cartService.addProduct(product);
    });
  }

  getProduct(categoryid) {
    console.log(
      'this is the categoryid from component **********',
      this.categoryid
    );
    this.queryResourceService
      .findAllProductsByCategoryIdUsingGET(categoryid)
      .subscribe((bev) => {
        this.product = bev;
        console.log(bev);
      });
  }
  async openCart() {
    const modal = await this.modalController.create({
      component: CartModalComponent,
      cssClass: 'cart-modal',
    });
    modal.present();
  }
  closeModal() {
    this.modalController.dismiss();
 }
goToProductDetailedView(id){
  this.router.navigateByUrl('product-detailed-view/' + id);

}
delete(id: number){
  this.productResourceService.deleteProductUsingDELETE(id).subscribe();
  this.products = this.products.filter(pro => id !== pro.id);
}

gotoUpdate(id) {

this.router.navigateByUrl('update-product/' + id);
}

}
