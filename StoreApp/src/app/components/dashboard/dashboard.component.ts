import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { slideData } from './../../core/mocks/slides.list';
import { Categories } from 'src/app/core/mocks/categories.list';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';
import { IonSlides, ModalController } from '@ionic/angular';
import { CategoryDTO } from 'src/app/api/models';
import { CategoryResourceService } from 'src/app/api/services';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
              private categoryResourceService: CategoryResourceService,
              private modalController: ModalController) { }
  categories = Categories;
  data = slideData;
  @ViewChild('Slides', null) slides: IonSlides;
  categorylist: CategoryDTO [] = [];
  catergory = CATEGORYS;
  @Input() userRole = 'user';
  currentid;
abstract;
  ionViewDidLoad() {
    // this.slides.autoplay = 1000;
    // this.slides.loop = true;
    // this.slides.speed = 500;
  }


  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryResourceService.getAllCategoriesUsingGET().subscribe(bev => {
          this.categorylist = bev; console.log(bev); });
  }

  arrowProcess(id) {
    this.currentid = id;
  }
  // slideChanged(){
  //   console.log("slide changed.");
  //   this.slides.startAutoplay();
  // }
  gotoCreateProductPage() {
    this.router.navigateByUrl('/create-product');
  }
  goToCreateCatogeryPage() {
    this.router.navigateByUrl('/create-category');
  }

goCategories() {
  this.router.navigateByUrl('/category-list');
}
async getCategory(id: any) {
  const modal = await this.modalController.create({
    component: ProductListComponent,
    componentProps: { categoryid: id },
  });
  console.log('this is the categoryid from page', id);
  modal.present();
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
}
