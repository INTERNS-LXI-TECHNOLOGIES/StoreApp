import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Util } from 'src/app/core/services/util';
import { UserJwtControllerService } from 'src/app/src/app/api/services/user-jwt-controller.service';

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
          this.util.createToast('You have Succesfuly Logedin');
          console.log(data, 'token');
          this.util.navigateCategories();
          console.log('logged in');
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
