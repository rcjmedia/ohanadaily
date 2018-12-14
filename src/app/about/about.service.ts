import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AboutService {
  baseUrl: string = 'http://34.222.113.192:8080/api/';

  aboutSection: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getAboutSection() {
    const url = this.baseUrl + 'about/';
    return this.httpClient.get(url).toPromise();
  }
}
