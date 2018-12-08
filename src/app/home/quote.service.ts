import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// const routes = {
//   quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
// };

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable()
export class QuoteService {
  baseUrl: string = 'http://localhost:8080/api/';

  ohana: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }

  // getRandomQuote(context: RandomQuoteContext): Observable<string> {
  //   return this.httpClient
  //     .cache()
  //     .get(routes.quote(context))
  //     .pipe(
  //       map((body: any) => body.value),
  //       catchError(() => of('Error, could not load joke :-('))
  //     );
  // }
}
