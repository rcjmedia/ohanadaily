import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: 'app/about/about.module#AboutModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'addcontent',
      loadChildren: 'app/addcontent/addcontent.module#AddcontentModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'categories',
      loadChildren: 'app/categories/categories.module#CategoriesModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'bids',
      loadChildren: 'app/bids/bids.module#BidsModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'contents',
      loadChildren: 'app/contents/contents.module#ContentsModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'details',
      loadChildren: 'app/details/details.module#DetailsModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'dashboards',
      loadChildren: 'app/dashboards/dashboards.module#DashboardsModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'preferred',
      loadChildren: 'app/preferred/preferred.module#PreferredModule'
    }
  ]),
  Shell.childRoutes([
    {
      path: 'user-profiles',
      loadChildren: 'app/user-profiles/user-profiles.module#UserProfilesModule'
    }
  ]),
  // Shell.childRoutes([
  //   {
  //     path: 'register',
  //     loadChildren: 'app/register/register.module#RegisterModule'
  //   }
  // ]),
  Shell.childRoutes([
    {
      path: 'transactions',
      loadChildren: 'app/transactions/transactions.module#TransactionsModule'
    }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
