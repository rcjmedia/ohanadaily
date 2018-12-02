import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerFormData: {username: string} = {username: ''}

  constructor(private auth: AuthService, private router: Router) { }

  register() {
    this.auth.signup(this.registerFormData)

    console.log('trying to navigate')
    return this.router.navigate(['login'])

  }

}
////////////////////////