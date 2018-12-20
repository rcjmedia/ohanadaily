import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'details',
      component: DetailsComponent,
      data: { title: extract('Details') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DetailsRoutingModule {}
