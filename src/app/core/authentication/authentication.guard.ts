import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
// import { OAuthService } from 'angular-oauth2-oidc';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Logger } from '../../core/logger.service';

const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    //   private oauthService: OAuthService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authenticationService.isAuthenticated()) {
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

/////////PREVIOUS TEST CODES//////////

// import { Injectable } from '@angular/core';
// import {
//   Router,
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot
// } from '@angular/router';

// // import { Logger } from '../logger.service';
// import { AuthenticationService } from './authentication.service';
// import { AuthService } from '../../services/auth.service';

// // const log = new Logger('AuthenticationGuard');

// @Injectable()
// export class AuthenticationGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (this.authenticationService.isAuthenticated()) {
//       return true;
//     }

//     // log.debug('Not authenticated, redirecting and adding redirect url...');
//     this.router.navigate(['/home'], {
//       queryParams: { redirect: state.url },
//       replaceUrl: true
//     });
//     return false;
//   }
// }
