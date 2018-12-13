import { Component, OnInit } from '@angular/core';
import { PreferredService } from './preferred.service';

@Component({
  selector: 'app-preferred',
  templateUrl: './preferred.component.html',
  styleUrls: ['./preferred.component.scss']
})
export class PreferredComponent implements OnInit {
  isLoading: boolean;
  preferredList: any[];

  constructor(private preferredService: PreferredService) {
    this.preferredList = [];
  }

  //need logic to say If buyer is logged in, render seller_id of preferred. or if seller is logged in, render buyer_id of preferred.
  renderList(result: any) {
    this.preferredList = result.sort((a: any, b: any) => {
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
      this.renderList(result);
    });
  }
}
