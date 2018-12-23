import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, Platform } from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { OktaAuthWrapper } from '../shared';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']
  // template: `
  //   <div *ngIf="givenName" class="col-12 mt-2">
  //     <button
  //       (click)="logout()"
  //       class="btn btn-sm btn-outline-primary float-right"
  //     >
  //       Logout
  //     </button>
  //     <h2>Welcome, {{ givenName }}!</h2>
  //     <p><a routerLink="/search" routerLinkActive="active">Search</a></p>
  //   </div>

  //   <div class="card mt-2" *ngIf="!givenName">
  //     <div class="card-body">
  //       <h4 class="card-title">Login with Authorization Server</h4>
  //       <button class="btn btn-primary" (click)="login()">Login</button>
  //     </div>
  //   </div>

  //   <div class="card mt-2" *ngIf="!givenName">
  //     <div class="card-body">
  //       <h4 class="card-title">Login with Username/Password</h4>

  //       <p class="alert alert-error" *ngIf="loginFailed">
  //         Login wasn't successful.
  //       </p>

  //       <div class="form-group">
  //         <label>Username</label>
  //         <input class="form-control" [(ngModel)]="username" />
  //       </div>
  //       <div class="form-group">
  //         <label>Password</label>
  //         <input class="form-control" type="password" [(ngModel)]="password" />
  //       </div>
  //       <div class="form-group">
  //         <button class="btn btn-primary" (click)="loginWithPassword()">
  //           Login
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // `
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  images: any[];
  isLoading: boolean;
  // username: string;
  // password: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private loginService: LoginService
  ) // private oauthService: OAuthService,
  // private oktaAuthWrapper: OktaAuthWrapper
  {
    this.createForm();
    this.images = [];
  }

  // loginWithPassword() {
  //   this.oktaAuthWrapper
  //     .login(this.username, this.password)
  //     .then(_ => console.debug('logged in'))
  //     .catch(err => console.error('error logging in', err));
  // }

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
  //   this.oauthService.initImplicitFlow();
  // }

  // logout() {
  //   this.oauthService.logOut();
  // }

  // get givenName() {
  //   const claims = this.oauthService.getIdentityClaims();
  //   if (!claims) {
  //     return null;
  //   }
  //   return claims['name'];
  // }

  login() {
    const loading = this.loadingController.create();
    loading.present();
    this.authenticationService
      .login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          loading.dismiss();
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.email} successfully logged in`);
          this.route.queryParams.subscribe(params =>
            this.router.navigate([params.redirect || '/'], { replaceUrl: true })
          );
        },
        error => {
          log.debug(`Login error: ${error}`);
          this.error = error;
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
