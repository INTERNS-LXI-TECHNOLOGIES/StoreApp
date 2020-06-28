import { CategoryDTO } from 'src/app/api/models';
import { ModalController, AlertController } from '@ionic/angular';
import {
  CategoryResourceService,
} from 'src/app/api/services';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  // categoryMap= Categories;
  categories = [];
  @Input() userRole = 'user';
  catergory = CATEGORYS;
  currentid = false;
  categorylist: CategoryDTO[] = [];

  constructor(private modalController: ModalController,
              private router: Router,
              private alert: AlertController,
              // private cartService: CartService,
              // private modalController: ModalController
              private categoryResourceService: CategoryResourceService
              ) { }

  ngOnInit() {
    this.ReadCategory();
  }
 gotoSalesHistory(){
   this.router.navigateByUrl('sales-history');
 }
  getAllCategories() {
    this.categoryResourceService.getAllCategoriesUsingGET().subscribe((bev) => {
      this.categorylist = bev;
      console.log(bev);
    });
  }

  async getCategory(id: any) {
    const modal = await this.modalController.create({
      component: ProductListComponent,
      componentProps: { categoryid: id },
    });
    console.log('this is the categoryid from page', id);
    modal.present();
  }

  // async getCategory(product: any) {
  //   const modal = await this.modalController.create({
  //     component: ProductListComponent,
  //     componentProps: { category: product },
  //   });
  //   console.log('this is the product from page', product);
  //   modal.present();
  // }

  gotoCreateProductPage() {
    this.router.navigateByUrl('/create-product');
  }
  goToCreateCatogeryPage() {
    this.router.navigateByUrl('/create-category');
  }
  arrowProcess(id) {
    if (this.currentid === id) {
      this.currentid = false;
    } else {
      this.currentid = id;

    }
  }
  // goToUpdateProductPage() {
  //   this.router.navigateByUrl('update-product');
  // }
  goToCategoryDetailedView(id){
    this.router.navigateByUrl('category-detailed-view/' + id);
  }

  async presentAlertConfirm(id) {
    const alert = await this.alert.create({
      header: 'Delete',
      message: 'Are you sure ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            // this.delete(id);
          },
        },
      ],
    });

    await alert.present();
  }
 ReadCategory(){
   this.categoryResourceService.getAllCategoriesUsingGET().subscribe(allcategory => {
     this.categories = allcategory;
   });
 }

}
