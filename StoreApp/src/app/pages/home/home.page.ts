import { Router } from '@angular/router';
import { UserDTO } from './../../api/models/user-dto';
import { UserResourceService } from 'src/app/api/services';

import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CATEGORYS } from 'src/app/core/dumb-data/CategoryDumb';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: UserDTO;

  constructor(

    private userResourceService: UserResourceService,
    private storage: Storage,
    private routes: Router
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.storage.get('username').then((username) => {
      console.log(username, 'username');
      this.userResourceService.getUserUsingGET(username).subscribe((data) => {
        console.log(data);
        this.user = data;
        this.checkRole();
      });
    });
  }

  checkRole() {
    if (this.user.authorities.includes('ROLE_ADMIN')) {
      console.log(this.user.authorities.includes('ROLE_ADMIN'), 'admin');
      this.routes.navigateByUrl('admin-layout');
    } else {
      this.routes.navigateByUrl('user-layout');
      console.log(this.user.authorities.includes('ROLE_ADMIN'), 'user');
    }
  }
}
