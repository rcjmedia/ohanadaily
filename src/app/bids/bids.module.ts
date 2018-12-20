import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { BidsService } from './bids.service';

import { BidsRoutingModule } from './bids-routing.module';
import { BidsComponent } from './bids.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, BidsRoutingModule],
  entryComponents: [BidsComponent],
  declarations: [BidsComponent],
  providers: [BidsService]
})
export class BidsModule {}
