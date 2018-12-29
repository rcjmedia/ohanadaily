import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
// import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../../services/auth.service';

// import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Logger } from '../../core/logger.service';

const log = new Logger('AuthGuard');

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    //   private oauthService: OAuthService,
    private router: Router,
    private authService: AuthService
  ) //   private authenticationService: AuthenticationService
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['/home'], {
      queryParams: { redirect: state.url },
      replaceUrl: true
    });
    return false;
  }
}

////////////////////////////////////////////////////

// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot
// } from '@angular/router';
// // import { OAuthService } from 'angular-oauth2-oidc';
// import { AuthService } from '../../services/auth.service';

// import { AuthenticationService } from '../../core/authentication/authentication.service';
// import { Logger } from '../../core/logger.service';

// const log = new Logger('AuthGuard');

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     //   private oauthService: OAuthService,
//     private router: Router,
//     //   private authenticationService: AuthenticationService
//     private authService: AuthService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     }

//     // log.debug('Not authenticated, redirecting and adding redirect url...');
//     this.router.navigate(['/login']);
//     // this.router.navigate(['/home'],
//     // {
//     //   queryParams: { redirect: '/*' },
//     //   replaceUrl: true
//     // });
//     return false;
//   }
// }
