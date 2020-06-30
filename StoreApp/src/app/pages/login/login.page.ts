import { CartService } from 'src/app/core/services/cart.service';
import { UserDTO } from './../../api/models/user-dto';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Util } from 'src/app/core/services/util';
import { UserJwtControllerService, UserResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [Util],
})
export class LoginPage implements OnInit {
  showLoginError = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private util: Util,
    private jwtService: UserJwtControllerService,
    private navController: NavController,
    private toastController: ToastController,
    private userResourceService: UserResourceService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.checkIfAlreadyLoggedIn();
  }

  checkIfAlreadyLoggedIn() {
    if (localStorage.getItem('token')) {
      this.navController.navigateRoot('/home');
    }
  }

  registerPage() {
    this.util.navigateRegister();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'toast',
    });
    toast.present();
  }

  login() {
    if (!this.loginForm.invalid) {
      console.log(this.loginForm.value.username, 'email is getting');
      this.jwtService.authorizeUsingPOST(this.loginForm.value).subscribe(
        (data) => {
          localStorage.setItem('token', data.id_token);
          localStorage.setItem('username', this.loginForm.value.username);
          this.userResourceService.getUserUsingGET(this.loginForm.value.username).subscribe((user: UserDTO) => {
            this.util.createToast('You have Succesfuly Logedin');
            localStorage.setItem('userId', user.id + '' );
            console.log(data, 'token');
            this.cartService.getCustomerId();
            this.util.navigateCategories();
            console.log('logged in');

          });
        },
        (err) => {
          this.util.createToast('Invalid username or Password');
        }
      );
    } else {
      this.showLoginError = true;
    }
  }
}
