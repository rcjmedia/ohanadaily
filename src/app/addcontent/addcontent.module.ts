import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AddcontentRoutingModule } from './addcontent-routing.module';
import { AddcontentComponent } from './addcontent.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AddcontentRoutingModule
  ],
  declarations: [AddcontentComponent]
})
export class AddcontentModule {}
