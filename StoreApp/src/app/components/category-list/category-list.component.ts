import { CategoryDTO } from 'src/app/api/models';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import {
  CategoryResourceService, QueryResourceService,
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
  currentid;
  categorylist: CategoryDTO[] = [];
  stock: any = [];
  constructor(private modalController: ModalController,
              private router: Router,
              private alert: AlertController,
              private categoryResourceService: CategoryResourceService,
              private navController: NavController,
              private queryResourceService: QueryResourceService
              ) { }

  ngOnInit() {
    console.log(this.userRole);

    // this.ReadCategory();
    this.getAllCategories();
  }
 gotoSalesHistory(){
   this.router.navigateByUrl('sales-history');
 }
 getAllCategories() {
  this.categoryResourceService.getAllCategoriesUsingGET().subscribe((bev) => {
    this.categorylist = bev;
    bev.forEach(c => {
      this.queryResourceService.findStockByCategoryIdUsingGET(c.id).subscribe(s => {
        this.stock.push(s);
      });
    });
    console.log('pppppppppp' + bev);
  });
  // this.goBack();
}
  async getCategory(id: any) {
    const modal = await this.modalController.create({
      component: ProductListComponent,
      componentProps: { categoryid: id },
    });
    console.log('this is the categoryid from page', id);
    modal.present();
  }

  gotoCreateProductPage() {
    this.router.navigateByUrl('/create-product');
  }
  goToCreateCatogeryPage() {
    this.router.navigateByUrl('/create-category');
  }
  arrowProcess(id) {
    this.currentid = id;
    // if (this.currentid === id) {
    //   this.currentid = false;
    // } else {
    //   this.currentid = id;

    // }
  }
  // goToUpdateProductPage() {
  //   this.router.navigateByUrl('update-product');
  // }
  goToCategoryDetailedView(id){
    this.router.navigateByUrl('category-detailed-view/' + id);
  }
  goBack() {
    this.router.navigateByUrl('/home');
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
//  ReadCategory(){
//    this.categoryResourceService.getAllCategoriesUsingGET().subscribe(allcategory => {
//      this.categories = allcategory;
//    });
//  }
 logout() {
  localStorage.removeItem('token');
  this.navController.navigateRoot('/login');

 }

}
