import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  isLoading: boolean;
  userDash: any[];
  userContent: any[];

  constructor(private dashboardService: DashboardService) {
    this.userDash = [];
    this.userContent = [];
  }

  alphaSort(result: any) {
    this.userDash = result.sort((a: any, b: any) => {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    });
  }

  contentSort(result: any) {
    this.userContent = result.sort((a: any, b: any) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.dashboardService.getDashboard().then(result => {
      this.alphaSort(result);
    });
    this.dashboardService.getUserContent().then(result => {
      this.contentSort(result);
    });
  }
}
