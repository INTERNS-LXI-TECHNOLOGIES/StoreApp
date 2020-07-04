import { Component, OnInit } from '@angular/core';
import { SaleDTO } from './../../api/models/sale-dto';
import { ProductDTO } from './../../api/models/product-dto';
import { Product, CartService } from 'src/app/core/services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { CommandResourceService, CartResourceService } from 'src/app/api/services';
import { CartDTO } from 'src/app/api/models';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss'],
})
export class MycartComponent implements OnInit {
    cart: Product[] = [];
    carts: CartDTO[] = [];
    productMap;
    total = 0;
   constructor( private cartService: CartService,
                private modalController: ModalController,
                private alertCntoller: AlertController,
                private commandResourceService: CommandResourceService,
                private cartResourceService: CartResourceService
                 ) { }

   ngOnInit() {
     this.carts = this.cartService.getCart();
     console.log(this.carts, 'sles is getting');
     this.getTotal();
     this.productMap = this.cartService.productsMap;
   }

   decreaseCartItem(product) {
     this.cartService.decreaseProduct(product);
     this.getTotal();
   }

   increaseCartItem(product) {
     this.cartService.addProduct(product);
     this.getTotal();
   }

   removeCartItem(product) {
     this.cartResourceService.deleteCartUsingDELETE(product);
     this.getTotal();
   }

   getTotal() {
     this.total = 0;
     this.carts.forEach(s => {this.total += s.amount; });
   }

   close() {
     this.modalController.dismiss();
   }

   async checkout() {

     const alert = await this.alertCntoller.create({
       header: 'Thanks for your Order!',
       message: 'We will deliver your food as soon as possible',
       buttons: ['OK']
     });
     alert.present().then(() => {
      // this.commandResourceService.addSaleUsingPOST(this.carts).subscribe((oder) => {
      //   console.log('this is the cartdetails', this.cart);
      //   this.modalController.dismiss();
      //  }, 
      //  err => {
      //    console.log('failed checkout', err);

      //  });
      this.cartService.clearProducts();
      this.modalController.dismiss();
     });
   }
  customerId(customerId: any, carts: CartDTO[]) {
    throw new Error("Method not implemented.");
  }
   emptyCart() {
     const choice = confirm('Do you want to clear cart?');
     if (choice) {
       this.carts = [];
       this.cartService.clearProducts();
       this.close();
     }
   }
}

