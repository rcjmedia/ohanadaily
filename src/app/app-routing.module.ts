import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
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
      path: 'contents',
      loadChildren: 'app/contents/contents.module#ContentsModule'
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
      path: 'register',
      loadChildren: 'app/register/register.module#RegisterModule'
    }
  ]),
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
