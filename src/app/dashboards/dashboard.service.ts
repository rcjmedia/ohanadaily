import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class DashboardService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  bidsTable: any[] = [];
  preferredTable: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getBidsTable() {
    const url = this.baseUrl + 'bids/';
    return this.httpClient.get(url).toPromise();
  }
  getPreferredTable() {
    const url = this.baseUrl + 'preferred/';
    return this.httpClient.get(url).toPromise();
  }
}
