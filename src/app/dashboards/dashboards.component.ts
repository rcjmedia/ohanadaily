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
  userDash: any[];
  contDash: any[];

  constructor(private dashboardService: DashboardService) {
    this.userDash = [];
  }

  alphaSort(result: any) {
    this.userDash = result.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  }

  // sortDash(result: any) {
  //   this.userDash = result.sort((a: any, b: any) => {
  //     if (a.id < b.id) {
  //       return -1;
  //     }
  //     if (a.id > b.id) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  ngOnInit() {
    this.isLoading = true;
    this.dashboardService.getDashboard().then(result => {
      this.alphaSort(result);
    });
    // this.dashboardService.getDashCont().then(result => {
    //   this.sortDash(result);
    // });
  }
}
