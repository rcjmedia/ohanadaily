import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, ContentsRoutingModule],
  entryComponents: [ContentsComponent],
  declarations: [ContentsComponent]
})
export class ContentsModule {}
