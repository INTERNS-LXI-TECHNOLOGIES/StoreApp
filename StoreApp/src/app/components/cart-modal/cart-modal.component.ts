import { ProductDTO } from './../../api/models/product-dto';
import { OnInit, Component } from '@angular/core';
import { Product, CartService } from 'src/app/core/services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { CommandResourceService } from 'src/app/api/services';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
    cart: Product[] = [];
   constructor( private cartService: CartService,
                private modalController: ModalController,
                private alertCntoller: AlertController,
                private commandResourceService: CommandResourceService,
                 ) { }

   ngOnInit() {
     this.cart = this.cartService.getCart();
     this.getOrder();
   }

   decreaseCartItem(product) {
     this.cartService.decreaseProduct(product);
   }

   increaseCartItem(product) {
     this.cartService.addProduct(product);
   }

   removeCartItem(product) {
     this.cartService.removeProduct(product);
   }

   getTotal() {
     return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
   }

   close() {
     this.modalController.dismiss();
   }

   getOrder() {
     this.commandResourceService.addSaleUsingPOST(this.cart).subscribe();
     console.log("this is the cartdetails",this.cart);
     this.modalController.dismiss();
   }

  //  async checkout() {

  //    const alert = await this.alertCntoller.create({
  //      header: 'Thanks for your Order!',
  //      message: 'We will deliver your food as soon as possible',
  //      buttons: ['OK']
  //    });
  //    alert.present().then(() => {
  //      this.cartService.clearProducts();
  //      this.modalController.dismiss();
  //    });
  //  }
   emptyCart() {
     const choice = confirm('Do you want to clear cart?');
     if (choice) {
       this.cart = [];
       this.cartService.clearProducts();
       this.close();
     }
   }
}
