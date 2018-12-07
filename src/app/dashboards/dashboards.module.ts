import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, DashboardsRoutingModule],
  declarations: [DashboardsComponent]
})
export class DashboardsModule {}
