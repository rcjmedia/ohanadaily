import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class HomeService {
  baseUrl: string = 'http://localhost:8080/api/';

  ohana: any[] = [];
  idContUrl = this.ohana;
  constructor(private httpClient: HttpClient) {}

  getContent() {
    const url = this.baseUrl + 'content/';
    return this.httpClient.get(url).toPromise();
  }

  getContentById(id: any) {
    const url = this.baseUrl + `content/${id}`;
    return this.httpClient.get(url).toPromise();
  }

  deleteContentById(id: number) {
    const contentUrl = this.baseUrl + `content/`;
    return this.httpClient.delete(contentUrl + id);
  }

  contDelete(idContUrl: any): Observable<void> {
    console.log('home service id', idContUrl);

    console.log('by ID content clicked: ', idContUrl);
    // const contentUrl = this.baseUrl + `content/deletestory/${id}`;
    return this.httpClient.delete<void>(
      `${this.baseUrl}content/deletestory/${idContUrl}`
    );
    // .pipe(catchError(this.handleError));
  }
}
