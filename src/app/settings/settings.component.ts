import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  Platform
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '@app/core/i18n.service';
import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private platform: Platform,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {}

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }

  get email(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.email : null;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  changeLanguage() {
    this.alertController
      .create({
        title: this.translateService.instant('Change language'),
        inputs: this.i18nService.supportedLanguages.map(language => ({
          type: 'radio',
          label: language,
          value: language,
          checked: language === this.i18nService.language
        })),
        buttons: [
          {
            text: this.translateService.instant('Cancel'),
            role: 'cancel'
          },
          {
            text: this.translateService.instant('Ok'),
            handler: language => {
              this.i18nService.language = language;
            }
          }
        ]
      })
      .present();
  }
  aboutPage() {
    this.alertController
      .create({
        title: this.translateService.instant('About Ohanadaily'),
        message: this.translateService.instant(`
        <p>
        Welcome To Ohana Daily. We've created this resource to connect news
        media outlets with the civilian reporter. In today's world of technology
        almost any one can contribute content to the various local and national
        news outlets. We would like to help you make a little extra money while
        doing so!
      </p>
      <p>
        DISCALIMER: ANY news story and or content submitted to OhanaDaily inc.
        is deemed the intellectual property of Ohana Daily inc. from here on out
        until the end of time. Ohana Daily inc. is not responsible for any
        damages incurred from buying or selling news story and or content on the
        Ohana Daily inc. platform. We reserve the right to terminate any buyer
        or any seller at any time for any reason.
      </p>`),
        buttons: [
          {
            text: this.translateService.instant('Cancel'),
            role: 'cancel'
          },
          {
            text: this.translateService.instant('Ok'),
            handler: language => {
              this.i18nService.language = language;
            }
          }
        ]
      })
      .present();
  }
}
