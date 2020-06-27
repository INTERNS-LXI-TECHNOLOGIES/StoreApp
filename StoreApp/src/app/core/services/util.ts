import { Injectable } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class Util {

    constructor(
        private loadingController: LoadingController,
        private toastController: ToastController,
        private navController: NavController,
        private routes: Router
    ) {}

    createToast(msg: string, iconName?: string) {
        this.toastController
          .create({
            message: msg,
            duration: 2000,
            color: 'dark',
            position: 'top',
            keyboardClose: true,
            buttons: [
              {
                side: 'start',
                icon:
                  iconName !== undefined ? iconName : 'information-circle-outline'
              }
            ]
          })
          .then(data => {
            data.present();
          });
      }

      async createLoader() {
        return await this.loadingController.create({
          spinner: 'bubbles'
        });
      }

      navigateBack() {
        this.navController.navigateRoot('');
      }

      navigateToLogin() {
        this.navController.navigateRoot('login');
      }


    navigateRoot() {
        this.navController.navigateForward('');
    }

    navigateRegister() {
        this.navController.navigateForward('/register');
    }

    navigateLogin() {
        this.navController.navigateBack('/login');
    }

    navigateCategories() {
        this.navController.navigateBack('/home');
    }

    // navigateProfile() {
    //     this.navController.navigateForward('/tabs/profile');
    // }

    // navigateAppointments() {
    //     this.navController.navigateForward('/tabs/appointment');
    // }

    // navigateConsultation(token) {
    // }

    // navigateSettings() {
    //     this.navController.navigateForward('/settings');
    // }

    // navigateSessions() {
    //     this.navController.navigateForward('/sessions');
    // }

}


