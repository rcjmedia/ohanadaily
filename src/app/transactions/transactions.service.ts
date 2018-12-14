import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TransactionsService {
  baseUrl: string = 'http://34.222.113.192:8080/api/';

  TransactionsSection: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getTransactions() {
    const url = this.baseUrl + 'about/';
    return this.httpClient.get(url).toPromise();
  }
}
