import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { PreferredRoutingModule } from './preferred-routing.module';
import { PreferredComponent } from './preferred.component';
import { PreferredService } from './preferred.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    PreferredRoutingModule
  ],
  declarations: [PreferredComponent],
  providers: [PreferredService]
})
export class PreferredModule {}
