import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class PreferredService {
  baseUrl: string = 'http://localhost:8080/api/';

  prefSellers: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getPreferred() {
    const url = this.baseUrl + 'preferred/';
    return this.httpClient.get(url).toPromise();
  }
}
