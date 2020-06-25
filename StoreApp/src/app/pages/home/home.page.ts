import { Router } from '@angular/router';
import { UserDTO } from './../../api/models/user-dto';
import { UserResourceService } from 'src/app/api/services';

import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: UserDTO;

  constructor(

    private userResourceService: UserResourceService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userResourceService.getUserUsingGET(localStorage.getItem('username')).subscribe((data) => {
      console.log(data);
      this.user = data;
      this.checkRole();
    });
  }

  checkRole() {
    if (this.user.authorities.includes('ROLE_ADMIN')) {
      console.log(this.user.authorities.includes('ROLE_ADMIN'), 'admin');
      this.routes.navigateByUrl('admin-layout');
    } else {
      this.routes.navigateByUrl('user-home');
      console.log(this.user.authorities.includes('ROLE_ADMIN'), 'user');
    }
  }
}
