import { Categories } from './../../mocks/categories.list';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryComponent } from 'src/app/components/category/category.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  // categoryMap= Categories;
 categories = Categories;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async getCategory(product: any){

    const modal = await this.modalController.create({
      component: CategoryComponent,
      componentProps: { category: product}
    });
    console.log('this is the product from page', product);
    modal.present();
  }

}
