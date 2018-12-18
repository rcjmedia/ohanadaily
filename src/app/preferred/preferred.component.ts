import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { PreferredService } from './preferred.service';

@Component({
  selector: 'app-preferred',
  templateUrl: './preferred.component.html',
  styleUrls: ['./preferred.component.scss']
})
export class PreferredComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  prefSellers: any[];

  constructor(private preferredService: PreferredService) {
    this.prefSellers = [];
  }

  alphaSort(result: any) {
    this.prefSellers = result.sort((a: any, b: any) => {
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
    this.preferredService.getPreferred().then(result => {
      this.alphaSort(result);
    });
  }
}
