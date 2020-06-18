import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { SpecificItemComponent } from '../specific-item/specific-item.component';
import { Category } from 'src/app/mocks/category.list';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category = Category;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}
 
  async viewItem(items: any){
    const modal = await this.modalController.create({
      component: SpecificItemComponent,
      // componentProps: { category: categories ,sessions: this.categoryMap.get(categories.name)}
    });
    modal.present();
  }

  
}
