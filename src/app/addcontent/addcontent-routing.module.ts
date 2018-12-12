import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AddcontentComponent } from './addcontent.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'addcontent',
      component: AddcontentComponent,
      data: { title: extract('Add Content') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AddcontentRoutingModule {}
