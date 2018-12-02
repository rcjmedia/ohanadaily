import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  planets: any[] = [];
  characters: any[] = [];
  
  constructor(private http: HttpClient) {

  }

  getCharacter(id: number) {
    const url = this.baseUrl + 'people/' + id;
    return this.http.get(url).toPromise();
  }

  getPlanet(id: number) {
    const url = this.baseUrl + 'planets/' + id;
    return this.http.get(url).toPromise();
  }

  addCharacters(character) {
    console.log('character', character)
    this.characters.push(character);
  }

  addPlanets(planet) {
    console.log('planet', planet)
    this.planets.push(planet);
  }

  register(data) {
    return Promise.resolve({});
  }

  login(data) {
    return Promise.resolve({ username: data.username });

  }

  logout() {
    return Promise.resolve({});
  }

  seller(data) {
    // return this.http.post(this.url, data).toPromise();
    // mock api
    return Promise.resolve({});
  }

  buyer(data) {
    // return this.http.post(this.url, data).toPromise();
    // mock api
    return Promise.resolve({});
  }

  getContents() {
    const url = this.baseUrl + 'people/';
    return this.http.get(url).toPromise();
  }

  signup(data) {
    const signUpUrl = this.baseUrl + 'signup';
    return this.http.post(signUpUrl, data).toPromise();
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Location } from '@angular/common';

// @Injectable({
//     providedIn: 'root'
// })
// export class BackendService {
//   baseUrl: string = 'http://localhost:9090/api/';

//   accounts: any[] = [];
//   contacts: any[] = [];
//   users: any[] = [];

//   constructor(private http: HttpClient) { }

//   search(term) {
//     const contactUrl = this.baseUrl + `contacts/search/${term}?user=1`; // hard coded
//     return this.http.get(contactUrl).toPromise();
//   }

//   getAccounts() {
//     const url = this.baseUrl + 'accounts/';
//     return this.http.get(url).toPromise();
//   }

//   getContents() {
//     const url = this.baseUrl + 'contacts/';
//     return this.http.get(url).toPromise();
//   }


//   addContact(data) {
//     const postUrl = this.baseUrl + 'contacts';
//     return this.http.post(postUrl, data).toPromise()
//   }

//   register(data) {
//     const registerUrl = this.baseUrl + 'register';
//     return this.http.post(registerUrl, data).toPromise();
//   }

//   login(data) {
//     const loginUrl = this.baseUrl + 'login';
//     return this.http.post(loginUrl, data).toPromise();
//   }

//   logout() {
//     const logoutUrl = this.baseUrl + 'logout';
//     return this.http.get(logoutUrl).toPromise();
//   }

//   getProfile() {
//     const profileUrl = this.baseUrl + 'profile';
//     return this.http.get(profileUrl).toPromise();
//   }

//   editProfile(data) {
//     const editUrl = this.baseUrl + 'users';
//     return this.http.put(editUrl, data).toPromise();
//   }

//   deleteContact(id) {
//     const deleteUrl = this.baseUrl + `contacts/${id}`
//     return this.http.delete(deleteUrl).toPromise();
//   }

//   getOneContact(id) {
//     const contactUrl = this.baseUrl + `contacts/${id}`
//     return this.http.get(contactUrl).toPromise();
//   }

//   submitContactEdit(data, id) {
//     const editContactUrl = this.baseUrl + `contacts/${id}`
//     return this.http.put(editContactUrl, data).toPromise();
//   }

//   searchContacts(data) {
//     const searchUrl = this.baseUrl + `contacts/search/${data}`
//     return this.http.get(searchUrl).toPromise();
//   }
// }