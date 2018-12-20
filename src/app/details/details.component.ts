import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  contDetails: any[];

  constructor(private detailsService: DetailsService) {
    this.contDetails = [];
  }

  alphaSort(result: any) {
    this.contDetails = result.sort((a: any, b: any) => {
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
    this.detailsService.getDetails().then(result => {
      this.alphaSort(result);
    });
  }
}
