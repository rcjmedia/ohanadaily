import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: object;

  private _isLoggedIn = false;
  private _isLoggedInAsObservable;
  
  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) { 
    this.user = this.session.getSession();
  }

  ngOnInit() {
    this._isLoggedInAsObservable = this.session.isLoggedInAsAObservable();
    this._isLoggedInAsObservable.subscribe(
      (loggedIn: boolean) => {
        this._isLoggedIn = loggedIn;
      },
      (error) => { console.log(error); }
    );
  }

  isLoggedIn() {
    // return this.session.isLoggedIn();
  }

  contents() {
    return this.router.navigate(['/contents']);
  }

  buyerDashboard() {
    return this.router.navigate(['/buyer']);
  }

  sellerDashboard() {
    return this.router.navigate(['/seller']);
  }

  signUp() {
    return this.router.navigate(['/signup']);
  }

  isLoggedInAsObservable() {
    return this._isLoggedIn;
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.auth.logout();
  }

  ngOnDestroy() {
    this._isLoggedInAsObservable.unsubscribe();
  }

}
