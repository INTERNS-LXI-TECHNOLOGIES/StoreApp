import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.page.html',
  styleUrls: ['./admin-layout.page.scss'],
})
export class AdminLayoutPage implements OnInit {
  constructor(  private router: Router) {
  }

  ngOnInit() {console.log('aaaaaaaaaaa');
  }

  goHome() {
    this.router.navigateByUrl('/category-list');
  }
  goProfile() {
    this.router.navigateByUrl('/profile');
  }

}
