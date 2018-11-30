import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private backend: BackendService,
    private router: Router
    ) {

  }

  ngOnInit() {
  }

  signUp() {
    return this.router.navigate(['/signup']);
  }

  login() {
      return this.router.navigate(['/login']);
  }

}
