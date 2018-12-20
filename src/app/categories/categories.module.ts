import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { CategoriesService } from './categories.service';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    CategoriesRoutingModule
  ],
  entryComponents: [CategoriesComponent],
  declarations: [CategoriesComponent],
  providers: [CategoriesService]
})
export class CategoriesModule {}