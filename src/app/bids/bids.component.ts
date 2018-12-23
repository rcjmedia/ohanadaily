import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { BidsService } from './bids.service';

@Component({
  moduleId: module.id,
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss']
})
export class BidsComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  saleBids: any[];

  constructor(private bidsService: BidsService) {
    this.saleBids = [];
  }
  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function(token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });
  }

  alphaSort(result: any) {
    this.saleBids = result.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.bidsService.getBids().then(result => {
      this.alphaSort(result);
    });
  }
}
