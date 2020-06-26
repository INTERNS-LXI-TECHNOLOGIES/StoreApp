import { CategoryDTO } from './../../api/models/category-dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  category: CategoryDTO = {};
  constructor(private router: Router,private categoryResourceService: CategoryResourceService,) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }
  createCategory(){
    this.categoryResourceService.createCategoryUsingPOST(this.category).subscribe(category => {
      this.goToHome();
  });
}
}