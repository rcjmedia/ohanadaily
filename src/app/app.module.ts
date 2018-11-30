import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, appRoutes } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BuyerDashboardComponent } from './pages/buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';

/* Services */
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ContentsComponent,
    BuyerComponent,
    SellerComponent,
    CheckoutComponent,
    BuyerDashboardComponent,
    SellerDashboardComponent,
    SignupComponent
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
