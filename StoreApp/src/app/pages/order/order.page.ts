import { SaleDTO } from './../../api/models/sale-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  sales: SaleDTO[] = [];
  constructor() { }

  ngOnInit() {
  }

}
