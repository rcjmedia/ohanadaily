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
import { AddcontentService } from './addcontent.service';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';

const log = new Logger('Add Content');

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent implements OnInit {
  version: string = environment.version;
  error: string;
  contentForm: FormGroup;

  formData: {
    content_type: string;
    user_id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    thumb_img: string;
    media_file: string;
  } = {
    content_type: '',
    user_id: null,
    name: '',
    description: '',
    price: null,
    category: '',
    thumb_img: '',
    media_file: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private addContentService: AddcontentService,
    private alertController: AlertController,
    private translateService: TranslateService
  ) {
    this.formData;
    this.createForm();
  }

  ngOnInit() {}

  submitForm() {
    console.log(this.formData);
    this.addContentService.addContent(this.formData).then(
      response => {
        console.log(response);
        log.debug(`Content uploaded`);
        this.router.navigate(['/home']);
        window.location.href = '/home';
        this.route.queryParams.subscribe(params =>
          this.router.navigate([params.redirect || '/home'], {
            replaceUrl: true
          })
        );
      },
      error => {
        log.debug(`Upload error: ${error}`);
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
    this.contentForm = this.formBuilder.group({
      content_type: ['', Validators.required],
      user_id: [null, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      category: ['', Validators.required],
      thumb_img: ['', Validators.required],
      media_file: ['', Validators.required]
    });
  }
}
