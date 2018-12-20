import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, Platform, Form } from 'ionic-angular';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';

const log = new Logger('Register');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  version: string = environment.version;
  error: string;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  register() {
    const loading = this.loadingController.create();
    loading.present();
    this.authenticationService
      .login(this.registerForm.value)
      .pipe(
        finalize(() => {
          this.registerForm.markAsPristine();
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
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      user_type: ['', Validators.required],
      rank: ['', Validators.required],
      avatar: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }
}