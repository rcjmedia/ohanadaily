import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, Platform, Form } from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import { AddcontentService } from './addcontent.service';

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
    type: string;
    user_id: string;
    title: string;
    description: string;
    location: string;
    bid: number;
    status: string;
    category: string;
    file_size: number;
    resolution: string;
    thumb_img: string;
    download_link: string;
  } = {
    type: '',
    user_id: '',
    title: '',
    description: '',
    location: '',
    bid: null,
    status: '',
    category: '',
    file_size: null,
    resolution: '',
    thumb_img: '',
    download_link: ''
  };

  mediaContent: object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private loadingController: LoadingController,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private addContentService: AddcontentService
  ) {
    this.formData;
    this.createForm();
  }

  ngOnInit() {}

  submitForm() {
    this.addContentService
      .addContent(this.formData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // addContent() {
  //   const loading = this.loadingController.create();
  //   loading.present();
  //   this.authenticationService
  //     .login(this.contentForm.value)
  //     .pipe(
  //       finalize(() => {
  //         this.contentForm.markAsPristine();
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
      type: ['', Validators.required],
      user_id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      bid: [null, Validators.required],
      status: ['', Validators.required],
      category: ['', Validators.required],
      file_size: [null, Validators.required],
      resolution: ['', Validators.required],
      thumb_img: ['', Validators.required],
      download_link: ['', Validators.required]
    });
  }
}
