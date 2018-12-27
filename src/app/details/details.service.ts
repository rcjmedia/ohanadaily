import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class DetailsService {
  baseUrl: string = 'http://localhost:8080/api/';

  contDetails: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getDetails() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }
}
