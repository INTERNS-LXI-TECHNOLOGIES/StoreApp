import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss'],
})
export class UpdateStockComponent implements OnInit {
stock:number=10;
n: number;
a: number;
  constructor(private router: Router) { }

  ngOnInit() {}
  goToHome(){
    this.router.navigateByUrl('admin-layout');
  }
  stockIncreaseProcess(){
   this.n=1;
   this.a=this.stock ++;this.n;

  }
  stockDecreaseProcess(){
    this.a=this.stock --;this.n;
  }
}
