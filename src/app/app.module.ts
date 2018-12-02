import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/* Routes */
import { AppRoutingModule, appRoutes } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

/* Services */
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './pages/signup/signup.component';
import { InvalidComponent } from './pages/invalid/invalid.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ContentsComponent,
    SignupComponent,
    InvalidComponent,
    CheckoutComponent,
    DashboardComponent,
    ProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],// Services
  bootstrap: [AppComponent]
})
export class AppModule { }
