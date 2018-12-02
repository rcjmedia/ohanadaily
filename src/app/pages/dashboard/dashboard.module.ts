import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AdminComponent } from '../../pages/admin/admin.component';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../../guards/auth-guard.service';
import { RoleGuard } from '../../guards/role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    AuthGuard,
    RoleGuard
  ],
  declarations: [HomeComponent, AdminComponent ]
})
export class DashboardModule { }
