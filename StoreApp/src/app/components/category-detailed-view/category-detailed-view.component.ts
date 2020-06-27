import { CategoryResourceService } from 'src/app/api/services';
import { ProductDTO, CategoryDTO } from 'src/app/api/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-category-detailed-view',
  templateUrl: './category-detailed-view.component.html',
  styleUrls: ['./category-detailed-view.component.scss'],
})
export class CategoryDetailedViewComponent implements OnInit {
id

category: CategoryDTO ={};
  constructor(private alert: AlertController,private router: Router,private route: ActivatedRoute, private categoryResourceService: CategoryResourceService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.categoryResourceService.getCategoryUsingGET(this.id).subscribe(c => {
       this.category=c;
    });
  }

  
  goToHome(){
    this.router.navigateByUrl('/admin-layout');
  }
  goToUpdateProductPage() {
    this.router.navigateByUrl('update-category/'+this.id);
  }
  async deleteProduct() {
    const alert = await this.alert.create({
      header: 'Delete',
      message: 'Are you sure ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Okay',
          handler: () => {
            this.categoryResourceService.deleteCategoryUsingDELETE(this.category.id).subscribe();
          }
        }
      ]
    });
  
    await alert.present();
    this.goToHome();
  }
  
}
