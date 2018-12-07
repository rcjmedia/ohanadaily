import { TestBed, inject } from '@angular/core/testing';
import { Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { MockAuthenticationService } from './authentication.service.mock';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let authenticationGuard: AuthenticationGuard;
  let authenticationService: MockAuthenticationService;
  let mockRouter: any;
  let mockSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    mockSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  beforeEach(inject(
    [AuthenticationGuard, AuthenticationService],
    (_authenticationGuard: AuthenticationGuard, _authenticationService: MockAuthenticationService) => {
      authenticationGuard = _authenticationGuard;
      authenticationService = _authenticationService;
    }
  ));

  it('should have a canActivate method', () => {
    expect(typeof authenticationGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    expect(authenticationGuard.canActivate(null, mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    authenticationService.credentials = null;

    // Act
    const result = authenticationGuard.canActivate(null, mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: undefined },
      replaceUrl: true
    });
    expect(result).toBe(false);
  });

  // About 
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/about';
    mockSnapshot.url = '/about';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Contents
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/contents';
    mockSnapshot.url = '/contents';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Transactions
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/transactions';
    mockSnapshot.url = '/transactions';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });
  
  // Addcontent
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/addcontent';
    mockSnapshot.url = '/addcontent';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Categories
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/categories';
    mockSnapshot.url = '/categories';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Dashboards
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/dashboards';
    mockSnapshot.url = '/dashboards';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Preferred
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/preferred';
    mockSnapshot.url = '/preferred';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });

  // Register
  it('should save url as queryParam if user is not authenticated', () => {
    authenticationService.credentials = null;
    mockRouter.url = '/register';
    mockSnapshot.url = '/register';

    authenticationGuard.canActivate(null, mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });
 
});
