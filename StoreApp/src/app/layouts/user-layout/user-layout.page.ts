import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.page.html',
  styleUrls: ['./user-layout.page.scss'],
})
export class UserLayoutPage implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  goHome() {
    this.router.navigateByUrl('/user-home');
  }
  goProfile() {
    this.router.navigateByUrl('/profile');
  }
  goCart() {
    this.router.navigateByUrl('/mycart');
  }
}
