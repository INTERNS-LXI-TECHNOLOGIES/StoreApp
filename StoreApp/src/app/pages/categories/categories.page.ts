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
  categoryMap: any;
  categories = Categories;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async getCategory(categories: any){
    const modal = await this.modalController.create({
      component: CategoryComponent,
      componentProps: { category: categories , sessions: this.categoryMap.get(categories.id)}
    });
    modal.present();
  }
  
}
