import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detailed-view',
  templateUrl: './category-detailed-view.component.html',
  styleUrls: ['./category-detailed-view.component.scss'],
})
export class CategoryDetailedViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goToHome(){
    this.router.navigateByUrl('/admin-layout');
  }

}
