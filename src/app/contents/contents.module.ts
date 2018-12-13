import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';
import { ContentsService } from './contents.service';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, ContentsRoutingModule],
  entryComponents: [ContentsComponent],
  declarations: [ContentsComponent],
  providers: [ContentsService]
})
export class ContentsModule {}
