import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { BidsService } from './bids.service';

@Component({
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
