import { Injectable } from '@angular/core';
import { UserProfilesService } from '../user-profiles/user-profiles.service';
import { SessionsService } from './sessions.service';

export interface Credentials {
  // Customize received credentials here
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: boolean;
  user: {
    loggedIn: boolean;
    email: string;
    userId: number;
  };

  constructor(
    private userProfilesService: UserProfilesService,
    private session: SessionsService
  ) {
    this.user = this.session.getSession();
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  login(data: { data: any }) {
    return this.userProfilesService.login(data).then(response => {
      this.session.setSession(response['email'], response['id']);

      return response;
    });
  }

  logout() {
    return this.userProfilesService.logout().then(response => {
      this.session.clearSession();

      return response;
    });
  }

  fetchProfile() {
    const userId = this.user.userId;

    return this.userProfilesService.fetchProfile(userId).then(response => {
      return response;
    });
  }

  editProfile(formData: any) {
    const userId = this.user.userId;

    return this.userProfilesService
      .editProfile(userId, formData)
      .then(response => {
        return response;
      });
  }
}
