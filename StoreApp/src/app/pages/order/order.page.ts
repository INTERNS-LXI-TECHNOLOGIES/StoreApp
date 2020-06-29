import { SaleResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { OrderList } from './../../core/mocks/order.list';
import { Component, OnInit } from '@angular/core';
import { SummaryComponent } from 'src/app/components/summary/summary.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
// orders = OrderList ;
sales: SalesDTO={};
  constructor(private modalController: ModalController,
              private salesResourceService: SaleResourceService) { }

  ngOnInit() {
    this.getorders();
  }
  getorders() {
    this.salesResourceService.getAllSalesUsingGET().subscribe((bev) => {
      this.orders = bev;
      console.log(bev);
    });
  }
}
