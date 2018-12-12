import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ContentsComponent } from './contents.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'contents',
      component: ContentsComponent,
      data: { title: extract('Contents') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContentsRoutingModule {}
