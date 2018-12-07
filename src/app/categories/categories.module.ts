import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, CategoriesRoutingModule],
  declarations: [CategoriesComponent]
})
export class CategoriesModule {}
