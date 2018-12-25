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
    title: string;
    description: string;
    location: string;
    bid: number;
    bid_time_duration: number;
    status: boolean;
    category: string;
    file_size: string;
    resolution: string;
    thumb_img: string;
    download_link: string;
  } = {
    content_type: '',
    user_id: null,
    title: '',
    description: '',
    location: '',
    bid: null,
    bid_time_duration: null,
    status: true,
    category: '',
    file_size: null,
    resolution: '',
    thumb_img: '',
    download_link: ''
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
    // console.log(this.formData)
    const loading = this.loadingController.create();
    loading.present();
    this.addContentService
      .addContent(this.formData)
      // .then(response => {
      //   console.log(response);

      //   this.router.navigate(['/home']);
      //   // window.location.href = "/home";
      // })
      // .then(res => {
      //   console.log(res);
      //   loading.dismiss();
      // })
      // .catch(err => {
      //   console.log(err);
      // });
      .then(
        response => {
          console.log(response);
          log.debug(`Content uploaded`);
          loading.dismiss();
          this.router.navigate(['/home']);

          // this.route.queryParams.subscribe(params =>
          //   this.router.navigate([params.redirect || '/home'], { replaceUrl: true })
          // );
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
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      bid: [null, Validators.required],
      bid_time_duration: ['', Validators.required],
      status: [null, Validators.required],
      category: ['', Validators.required],
      file_size: ['', Validators.required],
      resolution: ['', Validators.required],
      thumb_img: ['', Validators.required],
      download_link: ['', Validators.required]
    });
  }
}
