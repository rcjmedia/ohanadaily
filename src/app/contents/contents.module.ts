import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ContentsRoutingModule
  ],
  declarations: [ContentsComponent]
})
export class ContentsModule {}
