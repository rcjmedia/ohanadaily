import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { UserProfilesRoutingModule } from './user-profiles-routing.module';
import { UserProfilesComponent } from './user-profiles.component';
import { UserProfilesService } from './user-profiles.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    UserProfilesRoutingModule
  ],
  entryComponents: [UserProfilesComponent],
  declarations: [UserProfilesComponent],
  providers: [UserProfilesService]
})
export class UserProfilesModule {}
