import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class UserProfilesService {
  baseUrl: string = 'http://localhost:8080/';

  userProfiles: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getProfiles() {
    const url = this.baseUrl + 'users/';
    return this.httpClient.get(url).toPromise();
  }

  login(data: any) {
    // Data object properties must be named "username" and "password":
    const loginUrl = this.baseUrl + 'login';
    const input = {
      username: data.email,
      password: data.password
    };

    return this.httpClient.post(loginUrl, input).toPromise();
  }

  logout() {
    const logoutUrl = this.baseUrl + 'logout';
    return this.httpClient.get(logoutUrl).toPromise();
  }

  fetchProfile(userId: any) {
    const profileUrl = this.baseUrl + `user/${userId}`;
    return this.httpClient.get(profileUrl).toPromise();
  }

  editProfile(userId: any, formData: any) {
    const profileUrl = this.baseUrl + `user/${userId}`;
    formData.countryId = Number(formData.countryId);
    formData.stateId = Number(formData.stateId);

    if (formData.countryId < 1) {
      // Prevents countryId from being 0:
      formData.countryId = null;
    }

    if (formData.stateId < 1) {
      // Prevents stateId from being 0:
      formData.stateId = null;
    }

    return this.httpClient.put(profileUrl, formData).toPromise();
  }
}
