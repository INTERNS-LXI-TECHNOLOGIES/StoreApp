import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/mocks/categories.list';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categories = Categories;
  constructor(private modalController: ModalController,
              private router: Router,
              private alert: AlertController) { }

  ngOnInit() {
  }

  async getCategory(product: any){

    const modal = await this.modalController.create({
      component: ProductListComponent,
      componentProps: { category: product}
    });
    console.log('this is the product from page', product);
    modal.present();
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
            // this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
