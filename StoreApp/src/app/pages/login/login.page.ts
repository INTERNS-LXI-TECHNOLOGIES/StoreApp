import { Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountResourceService, UserJwtControllerService } from 'src/app/api/services';

import { Component, OnInit } from '@angular/core';
import { Util } from './../../services/util';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [Util]
})
export class LoginPage implements OnInit {
  showLoginError = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private util: Util,
              private accountService: AccountResourceService,
              private httpClient: HttpClient,
              private jwtService: UserJwtControllerService,
              private router: Router

              ) { }

  ngOnInit() {
  }
  registerPage() {
    this.util.navigateRegister();
 }

 login() {
  this.jwtService.authorizeUsingPOST( this.loginForm.value)
  .subscribe(data => {
    console.log(data);
  });
  if (!this.loginForm.invalid) {
    this.util.navigateCategories();
    console.log('logged in');
  } else {
    this.showLoginError = true;
  }
}

}
