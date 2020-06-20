import { CATEGORYS } from './../../dumb-data/CategoryDumb';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  products = [
    {
      name:'chilly powder',
      price:'  100'
    }
  ]
  catergory = CATEGORYS;
  currentid

  constructor(private router: Router,private alert:AlertController){}

  ngOnInit() {
  }
gotoCreateProductPage(){
this.router.navigateByUrl('create-product');
}
goToCreateCatogeryPage(){
  this.router.navigateByUrl('create-category');
}
arrowProcess(id){
  this.currentid= id
}
goToUpdateProductPage(){
  this.router.navigateByUrl('update-product');
}



async presentAlertConfirm(id) {
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
         // this.delete(id);
        }
      }
    ]
  });

  await alert.present();
}

}
