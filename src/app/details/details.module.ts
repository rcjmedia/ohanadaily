import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { DetailsService } from './details.service';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, DetailsRoutingModule],
  entryComponents: [DetailsComponent],
  declarations: [DetailsComponent],
  providers: [DetailsService]
})
export class DetailsModule {}
