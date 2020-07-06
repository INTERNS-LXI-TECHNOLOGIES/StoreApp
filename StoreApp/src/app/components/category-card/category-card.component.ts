import { ModalController } from '@ionic/angular';
import { CategoryResourceService } from 'src/app/api/services';
import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/api/models';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  categorylist: CategoryDTO[] = [];
  constructor(private categoryResourceService: CategoryResourceService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.getAllCategories();
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

}
