import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { SpecificItemComponent } from '../specific-item/specific-item.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // @Input() category: categoryDTO;
  // items : SpecificItems[] = [];
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
