import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class TransactionService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  userDash: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getTransaction() {
    const url = this.baseUrl + 'transactions/';
    return this.httpClient.get(url).toPromise();
  }
}
