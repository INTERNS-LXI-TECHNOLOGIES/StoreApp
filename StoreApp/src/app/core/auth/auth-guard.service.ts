import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AccountResourceService } from 'src/app/api/services';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private navController: NavController
  ) {
    console.log('tertertr');
  }

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
          this.navController.navigateRoot('/login');
      }

      return false;
  }
}
