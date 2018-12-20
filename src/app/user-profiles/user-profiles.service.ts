import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class UserProfilesService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  userProfiles: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getProfiles() {
    const url = this.baseUrl + 'users/';
    return this.httpClient.get(url).toPromise();
  }
}
