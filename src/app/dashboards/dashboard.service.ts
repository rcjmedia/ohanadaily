import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class DashboardService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  userDash: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getDashboard() {
    const url = this.baseUrl + 'users/';
    return this.httpClient.get(url).toPromise();
  }
}
