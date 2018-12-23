import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class AddcontentService {
  baseUrl: string = 'http://localhost:8080/api/content/';

  constructor(private httpClient: HttpClient) {}

  // register(data: any) {
  //   const registerUrl = this.baseUrl + 'users';
  //   const input = {
  //     full_name: data.full_name,
  //     last_name: data.last_name,
  //     email: data.email,
  //     password: data.password,
  //     birthdate: data.birthdate,
  //     address: data.address,
  //     user_type: data.user_type,
  //     rank: data.rank,
  //     avatar: data.avatar
  //   };

  //   return this.httpClient.post(registerUrl, input).toPromise();
  // }

  addContent(data: any) {
    const addUrl = this.baseUrl + `addcontent`;
    const input = {
      type: data.type,
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
    return this.httpClient.post(addUrl, data).toPromise();
  }
}
