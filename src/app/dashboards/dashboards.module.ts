import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    DashboardsRoutingModule
  ],
  entryComponents: [DashboardsComponent],
  declarations: [DashboardsComponent],
  providers: [DashboardService]
})
export class DashboardsModule {}
