import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { PreferredComponent } from './preferred.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'preferred',
      component: PreferredComponent,
      data: { title: extract('Preferred Sellers') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PreferredRoutingModule {}
