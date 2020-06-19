import { SpecificItem } from './../../mocks/specificitem.list';
import { Util } from './../../services/util';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specific-item',
  templateUrl: './specific-item.component.html',
  styleUrls: ['./specific-item.component.scss'],
  providers: [Util]
})
export class SpecificItemComponent implements OnInit {

  quantity = [];
  i: any;

  specificitem: any[] = [];

  constructor(private modalController: ModalController,
              private util: Util) { }

ngOnInit() {}

async viewCart(){
  // const modal = await this.modalController.create({
  //   // component: CartComponent,
  //   // componentProps: { category: categories ,sessions: this.categoryMap.get(categories.name)}
  // });
  // modal.present();
}
categoriesPage() {
  this.util.navigateCategories();
}
increament() {

  const index = 1;
  console.log(this.quantity);
  this.quantity[index] = this.quantity[index] + 1;
  // this.orders.beverages.push(product);
  this.quantity[1] = 0;
  return this.quantity[1]++;
}
decreament() {
  const pindex = 1;
  console.log(this.quantity);
  if (this.quantity[pindex] > 0) {
  this.quantity[pindex] = this.quantity[pindex] - 1;
  this.quantity[1] = 0;
  return this.quantity[1]--;
  }
}

getSpecificItem() {
this.specificitem = SpecificItem;
}
}
