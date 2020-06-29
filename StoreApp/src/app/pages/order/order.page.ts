import { OrderList } from './../../core/mocks/order.list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
orders = OrderList ;
  constructor() { }

  ngOnInit() {
  }

}
