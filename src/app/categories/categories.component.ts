import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  categoryList: any[];

  constructor(private categoriesService: CategoriesService) {
    this.categoryList = [];
  }

  alphaSort(result: any) {
    this.categoryList = result.sort((a: any, b: any) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.categoriesService.getCategory().then(result => {
      this.alphaSort(result);
    });
  }
}
