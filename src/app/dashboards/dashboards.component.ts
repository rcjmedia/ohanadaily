import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  bidsTable: any[];
  preferredTable: any[];

  constructor(private dashboardService: DashboardService) {
    this.bidsTable = [];
    this.preferredTable = [];
  }

  sortBidsTable(result: any) {
    this.bidsTable = result.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  sortPreferredTable(result: any) {
    this.preferredTable = result.sort((a: any, b: any) => {
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
    this.dashboardService.getBidsTable().then(result => {
      this.sortBidsTable(result);
    });
    this.dashboardService.getPreferredTable().then(result => {
      this.sortPreferredTable(result);
    });
  }
}
