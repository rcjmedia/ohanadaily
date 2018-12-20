import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { UserProfilesComponent } from './user-profiles.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'user-profiles/',
      component: UserProfilesComponent,
      data: { title: extract('Profiles') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserProfilesRoutingModule {}
