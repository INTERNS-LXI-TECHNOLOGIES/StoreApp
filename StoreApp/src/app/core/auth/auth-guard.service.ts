import { UserResourceService } from 'src/app/api/services';
import { UserDTO } from './../../api/models/user-dto';
import { NavController, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private navController: NavController,
    private alertController: AlertController,
    private userResourceService: UserResourceService
  ) {
    console.log('tertertr');
  }
  user: UserDTO;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin();
  }

  checkLogin() {
      if (localStorage.getItem('token')) {
          return true;
      } else {
          this.showAlert();
          this.navController.navigateRoot('/login');
      }

      return false;
  }
  async showAlert() {
    const alert = await this.alertController.create ({
      header: 'Unauthorized',
      message: 'You are not autherized to vist that page !!!!',
      buttons: ['ok']
    });
    alert.present();
  }
}
