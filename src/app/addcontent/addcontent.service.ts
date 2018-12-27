import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class AddcontentService {
  baseUrl: string = 'http://localhost:8080/api/content/';

  constructor(private httpClient: HttpClient) {}

  addContent(data: any) {
    const addUrl = this.baseUrl + `add`;
    const input = {
      content_type: data.content_type,
      user_id: data.user_id,
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      thumb_img: data.thumb_img,
      media_file: data.media_file
    };
    return this.httpClient.post(addUrl, input).toPromise();
  }
}
