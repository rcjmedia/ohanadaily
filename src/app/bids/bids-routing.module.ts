import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { BidsComponent } from './bids.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'bids',
      component: BidsComponent,
      data: { title: extract('Bids') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BidsRoutingModule {}
