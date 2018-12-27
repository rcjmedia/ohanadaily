import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class CategoriesService {
  baseUrl: string = 'http://localhost:8080/api/';

  categoryList: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getCategory() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }
}
