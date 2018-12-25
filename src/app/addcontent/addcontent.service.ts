import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class AddcontentService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/content/';

  constructor(private httpClient: HttpClient) {}

  addContent(data: any) {
    const addUrl = this.baseUrl + `add`;
    const input = {
      content_type: data.content_type,
      user_id: data.user_id,
      title: data.title,
      description: data.description,
      location: data.location,
      bid: data.bid,
      bid_time_duration: data.bid_time_duration,
      status: data.status,
      category: data.category,
      file_size: data.file_size,
      resolution: data.resolution,
      thumb_img: data.thumb_img,
      download_link: data.download_link
    };
    return this.httpClient.post(addUrl, input).toPromise();
  }
}
