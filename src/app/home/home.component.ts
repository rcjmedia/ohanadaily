import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SessionsService } from '../services/sessions.service';
import { AuthService } from '../services/auth.service';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { HomeService } from './home.service';
import { TranslateService } from '@ngx-translate/core';
import { identifier, numberTypeAnnotation } from 'babel-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  uri = 'http://localhost:8080';
  show: boolean = true;
  quote: string;
  isLoading: boolean;
  ohana: any;
  user = this.session.getSession();
  userData: object = {
    userId: 0
  };
  constructor(
    private homeService: HomeService,
    private router: Router,
    private http: HttpClient,
    private session: SessionsService,
    private auth: AuthService,
    private alertController: AlertController,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) {
    this.ohana = [];
  }

  alphaSort(result: any) {
    this.ohana = result.sort((a: any, b: any) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    });
  }

  deleteContentById() {
    let gettingID = document.getElementById('idContent').innerText;
    console.log('delete click function', gettingID);
    console.log(!this.user.userId);
    this.homeService
      .contDelete(gettingID)
      .toPromise()
      .then(loaded => {
        console.log(loaded);
        location.reload();
      })
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .then(result => {
        console.log(result);
        this.alertController
          .create({
            title: this.translateService.instant('Content Deleted'),
            // message: this.translateService.instant(`You deleted this content.`),
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.homeService.getContent().then(result => {
      this.alphaSort(result);
    });
    this.auth.fetchProfile().then((response: object) => {
      this.userData = response;
    });
    console.log(this.user.userId);
  }
}
