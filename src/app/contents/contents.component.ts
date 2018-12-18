import { Component, OnInit } from '@angular/core';
import { ContentsService } from './contents.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  contents: any[];

  constructor(private contentsService: ContentsService) {
    this.contents = [];
  }

  alphaSort(result: any) {
    this.contents = result.sort((a: any, b: any) => {
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
    this.contentsService.getContents().then(result => {
      this.alphaSort(result);
    });
  }
}
