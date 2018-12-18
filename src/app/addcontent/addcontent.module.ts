import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AddcontentRoutingModule } from './addcontent-routing.module';
import { AddcontentComponent } from './addcontent.component';
import { AddcontentService } from './addcontent.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    AddcontentRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddcontentComponent],
  declarations: [AddcontentComponent],
  providers: [AddcontentService]
})
export class AddcontentModule {}
