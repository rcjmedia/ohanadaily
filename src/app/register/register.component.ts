import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  LoadingController,
  AlertController,
  Platform,
  Form
} from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import { RegisterService } from './register.service';
import { TranslateService } from '@ngx-translate/core';

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

  formData: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  } = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService,
    private alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.formData;
    this.createForm();
  }

  ngOnInit() {}

  register() {
    this.registerService.register(this.formData).then(
      response => {
        console.log(response);
        log.debug(`User Created!`);
        this.alertController
          .create({
            title: this.translateService.instant('Wrong Email or Password!'),
            message: this.translateService.instant(`Please log back in.`),
            buttons: [
              {
                text: this.translateService.instant('Ok'),
                handler: language => {
                  this.i18nService.language = language;
                }
              }
            ]
          })
          .present();
        this.router.navigate(['/login']);
      },
      error => {
        log.debug(`Register error: ${error}`);
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
      password: ['', Validators.required]
    });
  }
}
