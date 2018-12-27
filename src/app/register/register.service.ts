import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from ‘rxjs’;
// import { map, catchError } from ‘rxjs/operators’;

@Injectable()
export class RegisterService {
  baseUrl: string = 'http://localhost:8080/api/auth/';

  //   constructor(private httpClient: HttpClient) {}

  //   register(data: any) {
  //     const registerUrl = this.baseUrl + `register`;
  //     const input = {
  //       full_name: data.full_name,
  //       last_name: data.last_name,
  //       email: data.email,
  //       password: data.password,
  //       birthdate: data.birthdate,
  //       address: data.address,
  //       rank: data.rank,
  //       avatar: data.avatar
  //     };
  //     return this.httpClient.post(registerUrl, input).toPromise();
  //   }
  // }

  // baseUrl: string = 'http://localhost:8080/api/content/';

  constructor(private httpClient: HttpClient) {}

  register(data: any) {
    const addUrl = this.baseUrl + `register`;
    const input = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    };
    return this.httpClient.post(addUrl, input).toPromise();
  }
}
