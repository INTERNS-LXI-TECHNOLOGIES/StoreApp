import { Util } from './../../services/util';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [Util]
})
export class RegisterPage implements OnInit {
  
  showSignupError = false;
// user:User={};
  signupForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    username: new FormControl('', [Validators.required])
  });
  constructor(private util: Util) { }
  
  ngOnInit() {
  }
createAccount(){

}

}
