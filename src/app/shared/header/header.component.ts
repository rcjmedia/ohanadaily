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
  
  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) { 
    this.user = this.session.getSession();
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  contents() {
    return this.router.navigate(['/contents']);
  }

  buyerDashboard() {
    return this.router.navigate(['/seller']);
  }

  sellerDashboard() {
    return this.router.navigate(['/buyer']);
  }

  signUp() {
    return this.router.navigate(['/signup']);
  }

  login() {
      return this.router.navigate(['/login']);
  }

  logout() {
    return this.router.navigate(['/logout']);
  }

}
