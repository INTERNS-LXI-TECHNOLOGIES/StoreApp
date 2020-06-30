import { SaleDTO } from './../../api/models/sale-dto';
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
    sales: SaleDTO[] = [];
    productMap;
    total = 0;
   constructor( private cartService: CartService,
                private modalController: ModalController,
                private alertCntoller: AlertController,
                private commandResourceService: CommandResourceService,

                 ) { }

   ngOnInit() {
     this.sales = this.cartService.getCart();
     console.log(this.sales, 'sles is getting');
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
     this.sales.forEach(s => {this.total += s.amount; });
   }

   close() {
     this.modalController.dismiss();
   }

  //  getOrder() {
  //    this.commandResourceService.addSaleUsingPOST(this.sales).subscribe((oder) => {
  //     console.log('this is the cartdetails', this.cart);
  //     this.modalController.dismiss();
  //    }, err => {
  //      console.log('failed checkout', err);

  //    });

  //  }

   async checkout() {

     const alert = await this.alertCntoller.create({
       header: 'Thanks for your Order!',
       message: 'We will deliver your food as soon as possible',
       buttons: ['OK']
     });
     alert.present().then(() => {
      this.commandResourceService.addSaleUsingPOST(this.sales).subscribe((oder) => {
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
       this.sales = [];
       this.cartService.clearProducts();
       this.close();
     }
   }
}
