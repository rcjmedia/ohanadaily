import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class ContentsService {
  baseUrl: string = 'http://localhost:8080/api/';

  contents: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getContents() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }
}
