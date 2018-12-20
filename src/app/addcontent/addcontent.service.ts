import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class AddcontentService {
  baseUrl: string = 'http://ohanadaily.com:8080/api/';

  constructor(private httpClient: HttpClient) {}

  register(data: any) {
    const registerUrl = this.baseUrl + 'users';
    const input = {
      full_name: data.full_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      birthdate: data.birthdate,
      address: data.address,
      user_type: data.user_type,
      rank: data.rank,
      avatar: data.avatar
    };

    return this.httpClient.post(registerUrl, input).toPromise();
  }
}
