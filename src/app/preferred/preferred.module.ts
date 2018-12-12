import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { PreferredRoutingModule } from './preferred-routing.module';
import { PreferredComponent } from './preferred.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, PreferredRoutingModule],
  entryComponents: [PreferredComponent],
  declarations: [PreferredComponent]
})
export class PreferredModule {}
