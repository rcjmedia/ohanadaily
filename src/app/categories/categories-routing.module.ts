import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'categories',
      component: CategoriesComponent,
      data: { title: extract('Categories') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoriesRoutingModule {}
