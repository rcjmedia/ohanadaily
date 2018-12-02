import { Routes } from '@angular/router';
// import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from '../../pages/admin/admin.component';
import { AuthGuard } from '../../guards/auth-guard.service';
import { RoleGuard } from '../../guards/role-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      {
        path: 'admin', component: AdminComponent,
        data: {role: 'Admin'},
        canActivate: [RoleGuard]
      }
    ]
  }
];
