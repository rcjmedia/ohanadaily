import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, Platform } from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';
import { AuthService } from '../services/auth.service';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  images: any[];
  isLoading: boolean;
  username: string;
  password: string;

  // Errors:
  emailError: string = '';
  passwordError: string = '';
  credentialsError: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private loginService: LoginService,
    private auth: AuthService,
    private alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.createForm();
    this.images = [];
  }

  alphaSort(result: any) {
    this.images = result.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  // login() {
  //   const loading = this.loadingController.create();
  //   loading.present();
  //   this.auth
  //   // this.authenticationService
  //     .login(this.loginForm.value)
  //     .pipe(
  //       finalize(() => {
  //         this.loginForm.markAsPristine();
  //         loading.dismiss();
  //       })
  //     )
  //     .subscribe(
  //       credentials => {
  //         log.debug(`${credentials.email} successfully logged in`);
  //         this.route.queryParams.subscribe(params =>
  //           this.router.navigate([params.redirect || '/'], { replaceUrl: true })
  //         );
  //       },
  //       error => {
  //         log.debug(`Login error: ${error}`);
  //         this.error = error;
  //       }
  //     );
  // }

  login() {
    // const loading = this.loadingController.create();
    // loading.present();
    this.auth
      .login(this.loginForm.value)
      .then(() => {
        this.loginForm.markAsPristine();
        // loading.dismiss();
      })
      .then(
        () => {
          log.debug(`successfully logged in`);
          this.route.queryParams.subscribe(params =>
            this.router.navigate([params.redirect || '/'], { replaceUrl: true })
          );
        },
        error => {
          log.debug(`Login error: ${error}`);
          this.error = error;
          // this.alertController
          //   .create({
          //     title: this.translateService.instant('Wrong Email or Password!'),
          //     message: this.translateService.instant(`Please log back in.`),
          //     buttons: [
          //       {
          //         text: this.translateService.instant('Ok'),
          //         handler: language => {
          //           this.i18nService.language = language;
          //         }
          //       }
          //     ]
          //   })
          //   .present();
        }
      );
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.loginService.getImages().then(result => {
      this.alphaSort(result);
    });
  }
}
