import { UserDTO } from './../../api/models/user-dto';
import { UserResourceService } from 'src/app/api/services';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
               private camera: Camera,
               private alertController: AlertController,
               private modalController: ModalController,
               private navController: NavController,
               private userResourceService: UserResourceService
  ) { }

  user: UserDTO;
  imageContent: any = {};
  image: any = {};
  readonly = true;

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userResourceService.getUserUsingGET(localStorage.getItem('username')).subscribe((data) => {
    console.log(data, 'user details');
    this.user = data;
    });
  }

  async confirmation() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      subHeader: '',
      message: 'Profile Updated',
      buttons: [ {
       text: 'Cancel',
       role: 'cancel'
     }, {
       text: 'Confirm',
       handler: () => {
         this.update();
       }
     }]
    });
    await alert.present();
  }

  edit() {

    this.readonly = !this.readonly;
    console.log('this wAS', this.readonly);
  }

  update() {
    console.log(this.user, 'update is working');
    this.userResourceService.updateUserUsingPUT(this.user).subscribe(
     (data) => {
       console.log(data, 'Uers Upadtes');
       this.edit();
    },

    
    () => {
     alert('Faile to update to user');
    });
  }


  // async uploadImage() {

  //   const modal = await this.modalController.create({
  //     component: ImageSelectorComponent,
  //     cssClass: 'half-height'
  //   });
  //   modal.onDidDismiss().then(data => {
  //    console.log(data.data.image, 'mmmmkkk');
  //    this.image = data.data.image.substring(
  //       data.data.image.indexOf(',') + 1,
  //     );
  //    this.imageContent = data.data.image.slice(
  //       data.data.image.indexOf(':') + 1,
  //       data.data.image.indexOf(';')
  //     );
  //    console.log(this.image, 'image');
  //   });
  //   return await modal.present();
  // }

  takePicture() {
   const options: CameraOptions = {
     quality: 100,
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE
   };

   this.camera.getPicture(options).then((imageData) => {
     this.image = 'data:image/jpeg;base64,';
   }, (err) => {
     console.log('Camera issue:' + err);
   });
 }


}
