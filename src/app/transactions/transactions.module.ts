import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { TransactionService } from './transactions.service';

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
  declarations: [TransactionsComponent],
  providers: [TransactionService]
})
export class TransactionsModule {}
