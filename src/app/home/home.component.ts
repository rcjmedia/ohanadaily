import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  ohana: any[];

  constructor(private quoteService: QuoteService) {
    this.ohana = [];
  }

  alphaSort(result: any) {
    this.ohana = result.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getUsers().then(result => {
      this.alphaSort(result);
    });

    // this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'users' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
  }
}
