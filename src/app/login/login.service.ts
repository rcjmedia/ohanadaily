import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class LoginService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  images: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getImages() {
    const url = this.baseUrl + 'content/5/';
    return this.httpClient.get(url).toPromise();
  }
}
