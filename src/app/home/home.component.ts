import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HomeService } from './home.service';
import { identifier, numberTypeAnnotation } from 'babel-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  uri = 'http://localhost:8080';

  quote: string;
  isLoading: boolean;
  ohana: any;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private http: HttpClient
  ) {
    this.ohana = [];
  }

  alphaSort(result: any) {
    this.ohana = result.sort((a: any, b: any) => {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
      return 0;
    });
  }

  deleteContentById() {
    let gettingID = document.getElementById('idContent').innerText;
    console.log('delete click function', gettingID);
    this.homeService
      .contDelete(gettingID)
      .subscribe(
        () => console.log(`Content with id = ${this.ohana} deleted`),
        err => console.log(err)
      );
  }

  // deleteContentById() {
  //   let idContent = this.ohana[0].id
  //   console.log('this is the content ID', idContent)
  //   // return this.homeService.getContent()
  //       // console.log('data here', data)
  //       return this.http.delete('/content/deletestory/' + idContent).toPromise()
  //       .then(result => {
  //         console.log(result)
  //         this.router.navigate(['/home'])
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  // }

  // deleteContact(id) {
  //   const deleteUrl = this.baseUrl + `contacts/${id}`
  //   return this.http.delete(deleteUrl).toPromise();
  // }

  ngOnInit() {
    this.isLoading = true;
    this.homeService.getContent().then(result => {
      this.alphaSort(result);
    });
  }
}
