import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { AddcontentRoutingModule } from './addcontent-routing.module';
import { AddcontentComponent } from './addcontent.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    AddcontentRoutingModule
  ],
  entryComponents: [AddcontentComponent],
  declarations: [AddcontentComponent]
})
export class AddcontentModule {}
