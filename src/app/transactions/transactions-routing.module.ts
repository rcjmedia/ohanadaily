import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'transactions',
      component: TransactionsComponent,
      data: { title: extract('Transactions') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TransactionsRoutingModule {}
