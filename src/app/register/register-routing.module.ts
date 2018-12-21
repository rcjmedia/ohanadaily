import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: 'login',
    component: RegisterComponent,
    data: { title: extract('Login') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RegisterRoutingModule {}
