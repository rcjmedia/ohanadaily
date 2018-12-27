import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class BidsService {
  baseUrl: string = 'http://localhost:8080/api/';

  userBids: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getBids() {
    const url = this.baseUrl + 'bids/';
    return this.httpClient.get(url).toPromise();
  }
}
