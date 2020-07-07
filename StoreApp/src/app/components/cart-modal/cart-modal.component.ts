import { CartDTO } from './../../api/models/cart-dto';
import { OnInit, Component } from '@angular/core';
import { Product, CartService } from 'src/app/core/services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { SaleDTO } from 'src/app/api/models';
import { CommandResourceService } from 'src/app/api/services';



@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
    cart: Product[] = [];
    cartDto: CartDTO[] = [];
    productMap;
    total = 0;
   constructor( private cartService: CartService,
                private modalController: ModalController,
                private alertCntoller: AlertController,
                private commandResourceService: CommandResourceService,

                 ) { }

   ngOnInit() {
     this.cartDto = this.cartService.getCart();
     console.log(this.cartDto, 'sles is getting');
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
     this.cartService.removeProduct(product);
     this.getTotal();
   }

   getTotal() {
     this.total = 0;
     this.cartDto.forEach(s => {this.total += s.amount; });
   }

   close() {
     this.modalController.dismiss();
   }
getMail() {

}
   async checkout() {
    console.log(this.cartService.customerId, 'customer id');

    const alert = await this.alertCntoller.create({
       header: 'Thanks for your Order!',
       message: 'We will deliver your Order as soon as possible',
       buttons: ['OK']
     });
    alert.present().then(() => {
      console.log(this.cartService.customerId, 'customer idzzzzzz');

      this.commandResourceService.addSaleUsingPOST({
        customerId: this.cartService.customerId,
        cartDTO: this.cartDto
      }).subscribe((oder) => {
        console.log('this is the cartdetails', this.cart);
        this.modalController.dismiss();
       }, err => {
         console.log('failed checkout', err);



       });
      this.cartService.clearProducts();
      this.modalController.dismiss();
     });
   }
   emptyCart() {
     const choice = confirm('Do you want to clear cart?');
     if (choice) {
       this.cartDto = [];
       this.cartService.clearProducts();
       this.close();
     }
   }
}
