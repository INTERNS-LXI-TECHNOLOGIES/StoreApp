import { AlertController } from '@ionic/angular';
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
  constructor(private router: Router,private categoryResourceService: CategoryResourceService,private alert: AlertController) { }

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
// goTocategoryList(){
//   this.router.navigateByUrl('category-list');
  
// }
// async deleteCategory() {
//   const alert = await this.alert.create({
//     header: 'Delete',
//     message: 'Are you sure ?',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel'
//       }, {
//         text: 'Okay',
//         handler: () => {
//           this.categoryResourceService.deleteCategoryUsingDELETE(this.category.id).subscribe();
//         }
//       }
//     ]
//   });

//   await alert.present();
// }
}