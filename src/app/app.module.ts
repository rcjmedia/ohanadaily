import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AddcontentModule } from './addcontent/addcontent.module';
import { CategoriesModule } from './categories/categories.module';
import { ContentsModule } from './contents/contents.module';
import { DetailsModule } from './details/details.module';
import { BidsModule } from './bids/bids.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { PreferredModule } from './preferred/preferred.module';
import { RegisterModule } from './register/register.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SettingsModule } from './settings/settings.module';
// import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './home/home.component';
import { RegisterService } from './register/register.service';
import { SessionsService } from './services/sessions.service';

@NgModule({
  imports: [
    // OAuthModule.forRoot(),
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    FormsModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(AppComponent, { locationStrategy: 'path' }),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SettingsModule,
    AboutModule,
    LoginModule,
    AddcontentModule,
    CategoriesModule,
    ContentsModule,
    DetailsModule,
    BidsModule,
    UserProfilesModule,
    DashboardsModule,
    PreferredModule,
    RegisterModule,
    TransactionsModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    // RegisterComponent,
    AppComponent
    // HomeComponent
  ],
  providers: [
    // AuthGuard,
    // OktaAuthWrapper,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar,
    RegisterService,
    SessionsService,
    SplashScreen
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
