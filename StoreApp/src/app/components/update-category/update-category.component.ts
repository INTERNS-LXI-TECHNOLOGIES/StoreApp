import { CategoryResourceService } from 'src/app/api/services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/api/models';
import { Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  category: CategoryDTO = {};
  id: number;
  constructor(private router: Router, private categoryResourceService: CategoryResourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.categoryResourceService.getCategoryUsingGET(this.id).subscribe(cate => {

      this.category = cate;
      console.log(this.category);

    })

  }
  goToHome() {
    this.router.navigateByUrl('admin-layout');
  }
  updateCategory() {
    console.log(this.category);

    this.categoryResourceService.updateCategoryUsingPUT(this.category).subscribe((cat) => this.goToHome());

  }
  onProfileChange(event:any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
    console.log(reader.result.toString().split(','));
    this.category.imageContentType = reader.result.toString().split(',')[1].split(':')[1];
    this.category.image = reader.result.toString().split(',')[1];
  }
}
}
