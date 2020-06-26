import { ProductDTO } from 'src/app/api/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detailed-view',
  templateUrl: './category-detailed-view.component.html',
  styleUrls: ['./category-detailed-view.component.scss'],
})
export class CategoryDetailedViewComponent implements OnInit {
id
  constructor(private router: Router) { }

  ngOnInit() {}
  goToHome(){
    this.router.navigateByUrl('/admin-layout');
  }
  goToUpdateProductPage() {
    this.router.navigateByUrl('update-category/'+this.id);
  }

}
