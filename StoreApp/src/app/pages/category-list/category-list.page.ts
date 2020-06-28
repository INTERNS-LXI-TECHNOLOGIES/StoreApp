import { DashboardComponent } from './../../components/dashboard/dashboard.component';
import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/mocks/categories.list';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { QueryResourceService, CategoryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  // categories = Categories;
  categorylist : CategoryDTO [] = [];
  constructor(private modalController: ModalController,
              private router: Router,
              private alert: AlertController,
              private queryResourceService: QueryResourceService,
              private categoryResourceService: CategoryResourceService) { }

  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryResourceService.getAllCategoriesUsingGET().subscribe(bev => {
          this.categorylist = bev; console.log(bev); });
  }
  async getCategory(id: any){

    const modal = await this.modalController.create({
      component: ProductListComponent,
      componentProps: { categoryid: id}
    });
    console.log('this is the categoryid from page', id);
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