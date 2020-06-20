
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
  constructor(private util: Util) { }

  ngOnInit() {
  }
  registerPage() {
    this.util.navigateRegister();
 }

 login() {
  if (!this.loginForm.invalid) {
    console.log('logged in');
  } else {
    this.showLoginError = true;
  }
}

}
