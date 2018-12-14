import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CategoriesService {
  baseUrl: string = 'http://34.222.113.192:8080/api/';

  categoriesSection: any[] = [];

  constructor(private httpClient: HttpClient) {}

  getCategoriesSection() {
    const url = this.baseUrl + 'categories/';
    return this.httpClient.get(url).toPromise();
  }
}
