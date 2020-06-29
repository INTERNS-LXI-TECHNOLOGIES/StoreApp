import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModalComponent } from 'src/app/components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.page.html',
  styleUrls: ['./user-layout.page.scss'],
})
export class UserLayoutPage implements OnInit {


  constructor(private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {

  }
  goHome() {
    this.router.navigateByUrl('/home');
  }
  goProfile() {
    this.router.navigateByUrl('/profile');
  }
 async goCart() {
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
//   async openCart() {
//     const modal = await this.modalController.create({
//       component: CartModalComponent,
//       cssClass: 'cart-modal',
//     });
//     modal.present();
//   }
//   closeModal() {
//     this.modalController.dismiss();
//  }
// }
