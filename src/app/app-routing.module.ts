import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BuyerDashboardComponent } from './pages/buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api/contacts', component: ContentsComponent },
  { path: 'api/profile', component: BuyerComponent },
  { path: 'api/createcontact', component: SellerComponent },
  { path: 'api/contacts/:id', component: CheckoutComponent },
  { path: 'api/contacts/:id', component: BuyerDashboardComponent },
  { path: 'api/contacts/:id', component: SellerDashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
