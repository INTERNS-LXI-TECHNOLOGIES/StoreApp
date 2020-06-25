import { slideData } from './../../core/mocks/slides.list';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Categories } from 'src/app/core/mocks/categories.list';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
// tslint:disable-next-line: align


export class UserHomePage implements OnInit {
  categories = Categories;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  data = slideData;
  @ViewChild('Slides', null) slides: Slides;
  ionViewDidLoad() {
    this.slides.autoplay = 1000;
    this.slides.loop = true;
    this.slides.speed = 500;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  slideChanged(){
    console.log("slide changed.");
    this.slides.startAutoplay();
  }
goHome() {
  this.router.navigateByUrl('/user-home');
}
goProfile() {
  this.router.navigateByUrl('/profile');
}
goCart() {
  this.router.navigateByUrl('/mycart');
}
goCategories() {
  this.router.navigateByUrl('/user-layout');
}
getCategory(c) {
  
}
}
