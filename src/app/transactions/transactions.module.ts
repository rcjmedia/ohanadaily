import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    TransactionsRoutingModule
  ],
  entryComponents: [TransactionsComponent],
  declarations: [TransactionsComponent]
})
export class TransactionsModule {}
