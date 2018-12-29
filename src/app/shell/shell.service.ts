import { Routes, Route } from '@angular/router';

// import { AuthenticationGuard } from '@app/core';
// import { AuthGuard } from '../shared/auth/auth.guard.service';
import { ShellComponent } from './shell.component';
// import { HomeComponent } from '../home/home.component';
// import { AddcontentComponent } from '../addcontent/addcontent.component';
// import { SettingsComponent } from '../settings/settings.component';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      // canActivate: [AuthGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
