import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// const routes = {
//   quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
// };

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class QuoteService {
  baseUrl: string = 'http://localhost:8080/api/';

  ohana: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getContent() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }
}
