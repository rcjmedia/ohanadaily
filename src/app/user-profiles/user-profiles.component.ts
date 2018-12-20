import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { UserProfilesService } from './user-profiles.service';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit {
  version: string = environment.version;
  isLoading: boolean;
  userProfiles: any[];

  constructor(private userProfilesService: UserProfilesService) {
    this.userProfiles = [];
  }

  alphaSort(result: any) {
    this.userProfiles = result.sort((a: any, b: any) => {
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
    this.userProfilesService.getProfiles().then(result => {
      this.alphaSort(result);
    });
  }
}
