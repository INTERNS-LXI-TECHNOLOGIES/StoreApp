import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { slideData } from './../../core/mocks/slides.list';
import { Categories } from 'src/app/core/mocks/categories.list';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  categories = Categories;
  data = slideData;
  // tslint:disable-next-line: member-ordering
  catergory = CATEGORYS;
  @Input() userRole = 'user';
  currentid;

  ngOnInit() {}
  
  arrowProcess(id) {
    this.currentid = id;
  }
  // slideChanged(){
  //   console.log("slide changed.");
  //   this.slides.startAutoplay();
  // }
  gotoCreateProductPage() {
    this.router.navigateByUrl('/create-product');
  }
  goToCreateCatogeryPage() {
    this.router.navigateByUrl('/create-category');
  }

goCategories() {
  this.router.navigateByUrl('/category-list');
}
getCategory(c) {
  
}
}
