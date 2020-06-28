import { UserDTO } from './../../api/models/user-dto';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  UserResourceService,
  AccountResourceService,
} from 'src/app/api/services';
import { Util } from 'src/app/core/services/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [Util],
})
export class RegisterPage implements OnInit {
  showSignupError = false;
  signupForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    login: new FormControl(''),
    langKey: new FormControl('en'),
  });
  constructor(
    private util: Util,
    private userService: UserResourceService,
    private accountService: AccountResourceService
  ) {}

  ngOnInit() {}

  createAccount() {
    this.signupForm.value.login = this.signupForm.value.email;
    console.log(this.signupForm.value);

    this.accountService
      .registerAccountUsingPOST(this.signupForm.value)
      .subscribe(
        (data) => {
          this.util.navigateLogin();
        },
        (err) => {
          console.log(err);
          

        }
      );
  }
}
